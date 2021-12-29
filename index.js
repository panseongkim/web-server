const express = require("express");
const app = express();
const path = require("path");

console.log(__dirname);// index.js(web server)のpathを取得することが可能

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")))//static:静的：動かない →これでwebserverのhtmlの置き場を指定することが出来る


// app.get("/", function (req, res) {
//   console.log(req);
//   res.send("<h1>トップページ!!!</h1>");
// });

app.post("/api/v1/quiz", function (req, res) {
  const answer = req.body.answer;  //req.body.answerはテキストで送られてくる。
  if (answer === "2") {
    // res.send("<h1>正解</h1>");
    res.redirect("/correct.html");
  } else {
    // res.send("<h1>不正解</h1>");
    res.redirect("/wrong.html");
  }
  res.send(answer);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server is running");
});