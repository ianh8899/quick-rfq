import { Hono } from "hono";

export interface Env {
  API_HOST: string;
}

const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: c.env.API_HOST }));

export default app;
