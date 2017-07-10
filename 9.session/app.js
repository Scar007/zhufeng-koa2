const Koa = require('koa');
const app = new Koa();
const session = require('koa-session');
app.keys = ['some secret hurr'];
let options = {

}
app.use(session(options,app));
app.use(ctx=>{
  let visit = ctx.session.visit;
  if(visit){
    visit = visit + 1;
  }else{
    visit = 1;
  }
  ctx.session.visit = visit;
  ctx.body = `${visit}`;
});
app.listen(3000);