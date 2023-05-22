const express = require("express");
const app = express();
const port = 5000;

//绑定并监听指定主机和端口上的连接。此方法与 Node 的http.Server.listen()相同。
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
//处理body
app.use(express.json());
//使用指定的回调函数将HTTP GET 请求路由到指定路径。
app.get("/useinfo", (req, res) => {
  res.send({ name: "bishang", paddword: "13616" });
});
//使用指定的回调函数将HTTP GET 请求路由到指定路径。
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "bishang" && password === "13616") {
    setTimeout(() => res.send({ status: 200 }), 1000);
  } else {
    res.status(400);
    res.send("用户名或密码错误");
  }
});
