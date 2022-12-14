const express = require ("express");
const path = require ("path");
const app = express ();
const publicPath = path.resolve (__dirname , "./public");

app.use (express.static("./public"));

const port = process.env.PORT || 3001
app.listen(port , () => {
    console.log("Corriendo ruta http://www.localhost:" + port);
});

app.get("/" , (req , res) => {
    let htmlPath = path.resolve(__dirname , ("./views/home.html"));
    res.sendFile(htmlPath);
});



