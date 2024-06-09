const http = require('http'); // 引入http模块

// 创建HTTP服务器
const server = http.createServer((req: any, res: any) => {
  // 设置响应头，指定内容类型
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // 发送响应数据
  res.end('Hello, World! This is a Node.js server running on port 8090.\n');
});

// 监听8090端口
const port = 8090;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});