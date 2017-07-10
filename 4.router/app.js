let Koa = require('koa');
let app = new Koa();
let Router = require('koa-router');
let router = new Router();
router.get('/', ctx => {
  ctx.body = 'home';
});

router.get('/user', ctx => {
  ctx.body = 'user';
});

router.get('/404', ctx => {
  ctx.body = '404';
});

app.use(router.routes(),router.allowedMethods());

app.listen(3000);