const Koa = require('koa');
let querystring = require('querystring');
const app = new Koa();
async function parseBody(req){
  return new Promise(function(resolve,reject){
    let buffers = [];
    req.on('data',function(data){
      buffers.push(data);
    });
    req.on('end',function(){
      let result = Buffer.concat(buffers).toString();
      resolve(querystring.parse(result));
    });
    req.on('err',function(err){
      reject(err);
    });
  });
}
app.use(async ctx => {
  if (ctx.request.url == '/' && ctx.request.method == 'GET') {
    ctx.body = (
      `
        <form method="post"><input type="text" name="username"/><input type="submit"/></form>
      `
    )
  } else if (ctx.request.url == '/' && ctx.request.method == 'POST') {
    let html = await parseBody(ctx.req);
    ctx.body = html;
  }else{
    ctx.body = '404';
  }
});
app.listen(3000);