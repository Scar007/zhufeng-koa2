const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const app = new Koa();
app.use(static(
  path.resolve('./static')
));
app.use(ctx => {
  ctx.body = '404';
});
app.listen(3000);