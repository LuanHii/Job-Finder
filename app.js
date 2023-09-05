const express = require('express');
const app = express();
const db = require("./db/connection");
const PORT = 3000;
const bodyParser = require('body-parser');




// starting app
app.listen(PORT, function() {
    console.log("Rodando na porta: " + PORT);
});


//body parser
app.use(bodyParser.urlencoded({extended: false}));


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
});

//jobs routes
app.use("/jobs", require("./routes/jobs"));