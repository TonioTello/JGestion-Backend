const express = require("express");
const app = express();
const importData = require("./data.json");
const cors = require ('cors'); // Conectar servidor del backend con el del frontend
let port = process.env.PORT || 3001;



// ***Middlewares***
app.use(cors({origin: 'http://localhost:4200'}));	


app.get("/", (req, res)=>{
    res.send("Hello Word from JGestons RTR")
});

app.get("/api/equipo/obtener", (req, res)=>{
    res.send(importData);
});



app.listen(port, () => {
    console.log(`Example app is listening on port http://localhost:${port}`);
})