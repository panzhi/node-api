const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
import { log } from './src/test'

// 总路由添加前缀/api,总地址变为http://localhost:8090/api
router.prefix('/api')

router.get('/hello', async (ctx: any) => {
  log('123')
  ctx.body = "hello World";
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(8090);