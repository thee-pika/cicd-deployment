import { WebSocketServer } from "ws";
import { prisma } from "@repo/db/client";

const wss = new WebSocketServer({ port: 3001 });

wss.on("connection", async function connection(ws) {
  console.log("ws is server is running on 8080");

  const res = await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  console.log("res res", res);

  ws.send("Hello From ws server");
});
