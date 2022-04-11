require("dotenv").config();
const cors = require("cors");
const adminRoutes = require("./routes/admin");
var express = require("express");
const connectdb = require("./utils/connection.js");
var path = require("path");

var app = express();
app.use(cors());
connectdb();
;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use("/admin", adminRoutes);

app.use("/", express.static(path.join(__dirname, "..", "dist", "front-end-demo")));



app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "front-end-demo", "index.html"));
});

app.use("*", function (req, res) {
  res.send("okk");
});


const port = process.env.PORT;


let server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



// // io.on("connection", function (socket) {
// //   console.log("Made socket connection", socket.id);
// // });

// io.on("connection", (socket) => {
//   console.log("a user connected", socket.request._query["t"]);

//   socket.join("123");
//   socket.on("message", (message) => {
//     console.log(message);
//     io.emit("message", `${socket.id.substr(0, 2)} said ${message}`);
//   });

//   socket.on("disconnect", () => {
//     console.log("a user disconnected!");
//   });

//   eventEmitter.on("neww", (data)=>{
//     io.to("123").emit("neww",data);
//   });
// });

