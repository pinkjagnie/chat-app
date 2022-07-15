var app = require('express')();
var http = require('http').createServer(app);
const PORT = 3001;

var io = require('socket.io')(http, {
  cors: {
   origin: '*',
 }
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})


io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  })
})

http.listen(3001, err=> {
  if(err) console.log(err)
  console.log("running")
})