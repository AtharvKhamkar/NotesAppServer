const { response } = require('express');
const express = require('express');
const app = express();

const mongoose = require("mongoose");
const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://atharvkhamkar:2002@cluster0.mhn2z1e.mongodb.net/notesdb").then(function () {
    
    app.get("/", function (req, res) {
        const response = {statuscode: res.statusCode,message: "API Works!" };
        res.json(response);
    });
    const noteRouter = require('./routes/Note')
    app.use("/notes", noteRouter);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Server started at PORT" + PORT);
});
