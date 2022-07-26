const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getDatabase } = require('firebase-admin/database')
var app = require('express')();
var http = require('http').createServer(app);
const PORT = 3001;

const firebaseConfig = {
  apiKey: "AIzaSyAo63M1cCTT_xDjGNSltidXk6th-_1YJa0",
  authDomain: "chat-app-a4821.firebaseapp.com",
  projectId: "chat-app-a4821",
  storageBucket: "chat-app-a4821.appspot.com",
  messagingSenderId: "78903031135",
  appId: "1:78903031135:web:ec8a5a716a993ee43f72ea",
  measurementId: "G-PZMZQS4PN5"
};

var serviceAccount = require("/home/olga/Projekty/chat-app/server/chat-app-a4821-firebase-adminsdk-n29pi-f2d0b2217c.json");

// initialize firebase
initializeApp({
  credential: cert(serviceAccount),
  databaseURL: "https://chat-app-a4821-default-rtdb.firebaseio.com"
});

let database = getDatabase();
let ref = database.ref("chats")


function SaveMsg(email, msg) {
  ref.child(email).child("msgs").push(msg, function(error) {
      if (error) {
        // The write failed...
        console.log("Failed with error: " + error)
      } else {
        // The write was successful...
        console.log("success")
      }
  })
}

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

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User ${socket.id} joined room ${data}`)
    msg_welcome = {
      room: data.room,
      author: "Support",
      message: "Witaj w naszym supporcie zostaw nam wiadomość odpiszemy Ci na email",
      time: data.time
    }
    socket.to(data.room).emit("receive_message", msg_welcome)
    console.log("Lol")
  })

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data)
    console.log("Msg:" , data)
   // tworzenie wiadomosci do wrzucenia
    msg = {
      room: data.room,
      author: data.author,
      message: data.message,
      time: data.time
    }
   roomName = data.room.replace(".", "^") //to jest wazne tutaj zmieniamy w emailu
   SaveMsg(roomName, msg) //wysylaj
})


  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  })
})

http.listen(3001, err=> {
  if(err) console.log(err)
  console.log("running")
})