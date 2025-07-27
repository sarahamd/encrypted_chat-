// src/server.ts
import { createServer } from 'http';
import { Server } from 'socket.io';
import app from './app';
import socketHandler from './sockets';

const PORT = process.env.PORT || 5000;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*', // Adjust in production
  },
});

socketHandler(io);

httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
