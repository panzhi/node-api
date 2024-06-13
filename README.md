### 一个测试香橙派的node测试服务  

### docker 源  
docker.1panel.live -- 1Panel 面板提供（推荐）  
hub.rat.dev -- 耗子面板提供  

### .dockerignore  
/dist  
/node_modules  
package-lock.json  
yarn.lock  

### docker部署  
docker build -t my-app .  
docker run --name my-app -p 8090:8090 my-app  

### 如果想打开容器内的终端，有以下两种选择  
docker exec -it 容器ID/名 /bin/bash  # 进入后开启新的终端 可在里面操作(常用) 或者为/bin/sh  
docker attach 容器ID/名 # 不会启动新的进程 单单只是进入容器的终端  
