import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 5173;
  const isProd = process.env.NODE_ENV === "production";

  app.use(express.json());

  console.log(`Starting server in ${isProd ? 'PRODUCTION' : 'DEVELOPMENT'} mode...`);

  // Vite middleware for development
  if (!isProd) {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        host: "0.0.0.0",
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    if (path.sep === '\\') { // Windows check for logging
        console.log(`Serving static files from: ${distPath}`);
    }
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(Number(PORT), "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
    console.log(`Access it locally at http://localhost:${PORT}`);
  });
}

startServer();
