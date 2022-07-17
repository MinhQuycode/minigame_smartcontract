var express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/scripts", express.static(__dirname + "/node_modules/web3.js-browser/build/"))

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);
httpServer.listen(3000);

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// Connect mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://minigame:fkiKrpDjFv5VTcB@cluster0.htpbo.mongodb.net/minigame?retryWrites=true&w=majority', function(err) {
    if (err) {
        console.log("Mongo connected error" + err)
    } else {
        console.log("Mongo connect success !")
    }
});

require("./controllers/game")(app)