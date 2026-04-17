import express from "express";
const app = express();
const port = 3000;

app.get("/", (req , res) =>{
    // console.log(req.rawHeaders);
    res.send("Home page");
});

app.get("/about", (req , res) =>{
    res.send("About page");
});

app.get("/contact", (req , res) =>{
    res.send("<h1>Contact page</h1>");
});

app.get("/about-me", (req , res) =>{
    res.send("<p>Hey, i am coder and today I am learning backend framework</p>");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});