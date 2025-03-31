import { Hono } from "hono";

const app = new Hono();

const View = () => {
  return (
    <html>
      <body>
        <h1>Hello Hono!</h1>
      </body>
    </html>
  );
};

app.get("/", (c) => {
  return c.html(<View />);
});
Deno.serve(app.fetch);
