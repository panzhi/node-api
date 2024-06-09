# 使用官方Node.js的Docker镜像
FROM node:14

# 设置工作目录
WORKDIR /usr/src/app

# 复制package.json和package-lock.json到工作目录
COPY package*.json ./ yarn.lock

# 安装项目依赖
RUN yarn

# 复制项目文件到工作目录
COPY . .

# 暴露端口
EXPOSE 8090

# 定义环境变量
# ENV NAME World

# 启动应用
CMD ["yarn", "build"]