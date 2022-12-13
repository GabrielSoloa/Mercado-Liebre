const express = require ("express");
const path = require ("path");
const app = express ();
const publicPath = path.resolve (__dirname , "./public");

app.use (express.static("./public"));

app.listen(3030 , () => {
    console.log("Corriendo ruta http://www.localhost:3030");
});

app.get("/" , (req , res) => {
    let htmlPath = path.resolve(__dirname , ("./views/home.html"));
    res.sendFile(htmlPath);
});