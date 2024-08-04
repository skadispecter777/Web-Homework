import {Inject,Controller,Body,Post} from '@midwayjs/core';
import {Context} from '@midwayjs/koa';
import { UserService } from '../service/user.service';

@Controller('/login')
export class LoginController{
    @Inject()
    ctx:Context;
    userService:UserService;
    @Post('/')
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