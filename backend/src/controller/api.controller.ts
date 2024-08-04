import { Inject, Controller, Get, Query, Post, Body } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/get_user')
  async getUser(@Query('uid') uid) {
    const user = await this.userService.getUser({
      uid,
      username: '',
      password: ''
    });
    return { success: true, message: 'OK', data: user };
  }

  @Post('/login')
  async login(@Body() credentials:{username:string;password:string}){
    const isCorrect=await this.userService.validateCredentials(credentials.username,credentials.password);
    if(isCorrect){
      return{
        success:true,
        message:'登录成功',
      };
    }
    else{
      return{
        success:false,
        message:'登录失败',
      }
    }
  }
}
