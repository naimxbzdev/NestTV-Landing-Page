import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Support Chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is required");
      }

      const ai = new GoogleGenAI({ apiKey });

      const systemPrompt = `You are an AI support assistant for NEST TV (Premium IPTV).
You help users with information about the website.
Here is the context about the service:
- NEST TV provides Premium IPTV services.
- 4K/8K Quality, No Buffer, 99.9% Uptime Server.
- Features: Live TV, Movies, Sports.
- 24/7 Live Support available.
- Pricing plans: Standard (৳ ৩০০/month), Premium (৳ ৫০০/month), VIP (৳ ৮০০/month).
- Available on Android, Smart TV, Web.
- Users can download the APK from the website via Google Drive or MediaFire.
- For issues, users can use the contact form.

Keep responses concise, friendly, and helpful. Always communicate in English or Bengali depending on the user's language.`;

      // Convert messages to Gemini format
      const geminiMessages = messages.map((msg: any) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      }));

      // Add system instruction to the beginning as developer role
      // But generateContent standard is using systemInstruction config.

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: geminiMessages,
        config: {
          systemInstruction: systemPrompt,
        }
      });

      res.json({ reply: response.text });
    } catch (error: any) {
      console.error("Chat API error:", error);
      res.status(500).json({ error: error.message || "Failed to process chat request" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
