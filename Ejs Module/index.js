// import express from "express";

// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   const today = new Date();
//   const day = today.getDate();
// });

// let type = "a Weekday";
// let adv = "It's time tto have hard work!";

// if (day === 0 || day === 6) {
//   type = "a Weekend";
//   adv = "It's time to have fun!";
// }

// res.render("index.ejs", {
//     dayType: type,
//     advice: adv
// });

// app.listen(port, () => {
//   console.log(`Server is running${port}.`);
// });

import express from "express";

const app = express();
const port = 3000;

// set EJS
// app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  let type = "a Weekday";
  let adv = "It's time to work hard!";

  if (day === 0 || day === 6) {
    type = "a Weekend";
    adv = "It's time to have fun!";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});