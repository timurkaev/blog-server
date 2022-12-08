import express from "express";
import "dotenv/config";
const app = express();
const port = process.env.PORT;
console.log(port);
app.get("/", (req, res) => {
    res.send("Все работает");
});
app.listen(port, () => {
    console.log(`Server start on port ${port}`);
});
