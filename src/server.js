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
  const data = [];
  data.length = 10000;
  res.send(data.fill(10000));
});
//使用指定的回调函数将HTTP GET 请求路由到指定路径。
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "zs" && password === "13616") {
    res.setHeader("Set-Cookie", "userName=zs; password=13616");
    res.send({ status: 200 });
  } else {
    res.status(400);
    res.send("用户名或密码错误");
  }
});
