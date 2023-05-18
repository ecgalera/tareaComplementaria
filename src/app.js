import express from "express";
import mongoose from "mongoose";
import __dirname from "./util.js";
import handlebars from "express-handlebars";
import viewsRoutes from "./router/viewsRouters.js";
import {Server} from "socket.io";
import registerChatHandler from "./dao/listeners/chatsHandler.js";

const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Listener to: ${PORT}`)
});

const uri = "mongodb+srv://egalera:123@cluster0.y0qkwla.mongodb.net/chat?retryWrites=true&w=majority"
const io = new Server(server)
const connection = mongoose.connect(uri)

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(`${__dirname}/public`))

app.engine("handlebars", handlebars.engine())
app.set("views", `${__dirname}/views` );
app.set("view engine", "handlebars" );

app.use("/", viewsRoutes);

io.on("connection", socket =>{
        registerChatHandler(io, socket);
})

