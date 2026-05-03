import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";
import path from "path";

const app: Express = express();

// ✅ Serve React build (presentation)
app.use(express.static(path.resolve("../../linkedin-masterclass/dist")));

// ✅ Show presentation on homepage
app.get("/", (req, res) => {
  res.sendFile(
    path.resolve("../../linkedin-masterclass/dist/index.html")
  );
});

// Logging
app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  })
);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api", router);

export default app;
