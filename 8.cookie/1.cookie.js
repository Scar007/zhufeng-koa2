const Koa = require('koa');
const path = require('path');
const app = new Koa();

app.use(ctx => {
  let visit = ctx.cookies.get('visit');
  if(visit){
    visit = parseInt(visit)+1;
  }else {
    visit = 1;
  }
  ctx.cookies.set('visit',visit);
  ctx.body = `这是你的第${visit}次访问`;
});
app.listen(3000);