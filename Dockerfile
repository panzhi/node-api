# 使用官方Node.js的Docker镜像
FROM node:14

# 设置工作目录
WORKDIR /usr/src/app

# 复制项目文件到工作目录
COPY . .

# 安装项目依赖
RUN npm install

# 编译TypeScript代码
RUN npm run build

# 暴露端口
EXPOSE 8090

# 定义环境变量
# ENV NAME World

# 启动应用
CMD ["node", "./dist/index.js"]
