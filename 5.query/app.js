const Koa = require('koa');
const app = new Koa();
app.use(ctx => {
  let url = ctx.url;
  let query = ctx.query;
  let querystring = ctx.querystring;
  ctx.body = {
    url,
    query,
    querystring
  }
});
app.listen(3000);