const express = require('express');
const app = express();
const db = require("./db/connection");
const PORT = 3000;


// starting app
app.listen(PORT, function() {
    console.log("Rodando na porta: " + PORT);
});


// db connection
db
    .authenticate()
    .then(() => {
        console.log("Conectado");
    })
    .catch(err => {
        console.log("Erro.", err);
    })


// routes
app.get("/", function(req, res) {
    res.send("Funcionando. 3");
})