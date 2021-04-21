const express = require("express");
const app = express();
let port = process.env.PORT || 3001;


app.get("/", (req, res)=>{
    res.send("Hello Word from JGestons RTR")
});

app.listen(port, () => {
    console.log(`Example app is listening on port http://localhost:${port}`);
})