const server = require("./server");
const { PORT, MONGO_URI } = require("./config");
const mongoose = require("mongoose");
const importData = require("./data.json");
const cors = require ('cors'); // Conectar servidor del backend con el del frontend

// ***Middlewares***
server.use(cors({origin: 'http://localhost:4200'}));

server.get("/", (req, res)=>{
    res.send("Hello Word!! from JGestons RTR'S Backend")
});

server.get("/api/equipo/obtener2", (req, res)=>{
    res.send(importData);
});


mongoose
	.connect(MONGO_URI, { useNewUrlParser: true })
	.then(() => {
		server.listen(PORT, () => {
			console.log(`GestionRTR Backend Running on Port ${PORT}`);
		});
	})
	.catch(console.log);