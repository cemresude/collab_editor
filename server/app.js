// server/app.js
const express = require('express');
const path = require('path');
const http = require('http');

const { Server } = require('socket.io');




const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, '..')));

// Ana sayfa isteğine index.html gönder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html')); // eksikti: join ve publicPath tanımsızdı
});

// 📡 Socket.io
io.on('connection', (socket) => {
  console.log('Bir kullanıcı bağlandı:', socket.id);

  socket.on('disconnect', () => {
    console.log('Bir kullanıcı ayrıldı:', socket.id);
  });

  socket.on('editor-update', (data) => {
    socket.broadcast.emit('editor-update', data);
  });
});

// 🚀 Sunucuyu başlat
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`✅ Sunucu ${PORT} portunda çalışıyor.`);
});
