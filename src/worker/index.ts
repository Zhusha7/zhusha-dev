import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("*", cors());

app.get("/api/status", (c) =>
    c.json({ ok: true, message: "Under construction" })
);

// For non-asset requests to "/", return 503 + Retry-After (useful for crawlers/monitors)
app.get("/", (c) => {
    c.header("Retry-After", "3600");
    return c.text("Site under construction — try again later.", 503);
});

export default app;
