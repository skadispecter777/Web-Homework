import * as Koa from 'koa';
import * as serve from 'koa-static'

const { Bootstrap } = require('@midwayjs/bootstrap');
Bootstrap.run();
const app=new Koa();
app.use(serve('../frontend'));