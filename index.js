const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("hello world from my backend world");
});
app.get("/users", (req, res) => {
    res.send("this is from user area !!! ");
});

const friend = [
    {
        id: 0,
        name: "Shahajahan Khan",
        age: 24,
        nickname: "Robu Da ",
        email: "Shahajahan_khan@gmail.com",
    },
    {
        id: 1,
        name: "FD Rafi",
        age: 24,
        nickname: "Luchu Boy",
        email: "FD_Rafi@gmail.com",
    },
    {
        id: 2,
        name: "Sheikh Rashel Ahmed",
        age: 24,
        nickname: "Shiku ",
        email: "Jamil_Ahmed_shiku@gmail.com",
    },
    {
        id: 3,
        name: "Shafin Ahmed",
        age: 24,
        nickname: "Guru metropadday ",
        email: "Shapin_ahmed@gmail.com",
    },
];

app.get("/friend", (req, res) => {
    res.send(friend);
});

app.get("/friend/:id", (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    const friend = friend[id];
    res.send(friend);
});

app.listen(port, () => {
    console.log("listing port from", port);
});
