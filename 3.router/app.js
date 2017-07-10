const Koa = require('koa');
const fs = require('fs');
const app = new Koa();
async function route(url) {
  let filename = `./views/${url}.html`;
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  });
}
app.use(async ctx => {
  let html = await route(ctx.request.url);
  ctx.body = html;
});
app.listen(3000);