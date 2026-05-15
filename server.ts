import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, message } = req.body;
    const FORMSPREE_ID = process.env.FORMSPREE_ID || "YOUR_FORM_ID_HERE";

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          _subject: `New TourMotion Inquiry from ${name}`
        })
      });

      if (response.ok) {
        res.json({ success: true, message: "Message sent! We'll be in touch soon." });
      } else {
        const errorData = await response.json();
        console.error("Formspree Error:", errorData);
        res.status(500).json({ error: "Service temporarily unavailable. Please try again later." });
      }

    } catch (error) {
      console.error("Connection Error:", error);
      res.status(500).json({ error: "Failed to connect to email service." });
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
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
