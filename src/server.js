import express from "express"

const app = express();

const PORT = 4000;

const handleListener = () => console.log("LISTENPORT", PORT);

app.listen(PORT, handleListener);

console.log("hello");