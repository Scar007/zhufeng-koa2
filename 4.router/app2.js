let Koa = require('koa');
let app = new Koa();
let Router = require('koa-router');
let router = new Router();
let index = new Router();
index.get('/', ctx => {
  ctx.body = 'home';
});

let user = new Router();
user.get('/signup', ctx => {
  ctx.body = 'signup';
});

user.get('/signin', ctx => {
  ctx.body = 'signin';
});
router.use('/',index.routes(),index.allowedMethods());
router.use('/user',user.routes(),user.allowedMethods());
app.use(router.routes(),router.allowedMethods());

app.listen(3000);