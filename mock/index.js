const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/api/auth/login/submit", (ctx, next) => {
  ctx.body = {
    status: 1,
    message: "success"
  };
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3333);
