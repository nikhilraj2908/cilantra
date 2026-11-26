require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const { connectDB } = require("./config/db");

/* ── App setup ──────────────────────────────────────────────────────── */
const app = express();

/* ── Security middleware ─────────────────────────────────────────────── */
app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL ?? "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json({ limit: "2mb" }));
app.use(morgan("dev"));

/* ── Rate limiting ───────────────────────────────────────────────────── */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

/* ── Routes ──────────────────────────────────────────────────────────── */
app.use("/api/auth", require("./routes/auth"));
app.use("/api/blogs", require("./routes/blogs"));
app.use("/api/success-stories", require("./routes/stories"));
app.use("/api/contact", require("./routes/contact"));

/* ── Health check ────────────────────────────────────────────────────── */
app.get("/api/health", (_req, res) => res.json({ ok: true }));

/* ── 404 ─────────────────────────────────────────────────────────────── */
app.use((_req, res) => res.status(404).json({ message: "Not found" }));

/* ── Error handler ───────────────────────────────────────────────────── */
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status ?? 500).json({ message: err.message ?? "Server error" });
});

/* ── Boot ────────────────────────────────────────────────────────────── */
const PORT = process.env.PORT ?? 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`\n✅  Cilantra backend running on http://localhost:${PORT}`);
    console.log(`   MongoDB: connected`);
    console.log(`   CORS:    ${process.env.CLIENT_URL ?? "http://localhost:5173"}\n`);
  });
});

