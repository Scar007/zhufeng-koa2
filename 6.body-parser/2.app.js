const Koa = require('koa');
let querystring = require('querystring');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
app.use(async ctx => {
  if (ctx.request.url == '/' && ctx.request.method == 'GET') {
    ctx.body = (
      `
        <form method="post"><input type="text" name="username"/><input type="submit"/></form>
      `
    )
  } else if (ctx.request.url == '/' && ctx.request.method == 'POST') {
    ctx.body = ctx.request.body;
  }else{
    ctx.body = '404';
  }
});
app.listen(3000);