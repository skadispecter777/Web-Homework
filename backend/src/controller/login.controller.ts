import {Inject,Controller,Body,Post} from '@midwayjs/core';
import {Context} from '@midwayjs/koa';
import { UserService } from '../service/user.service';

@Controller()
export class LoginController{
    @Inject()
    ctx:Context;
    userService:UserService;
    @Post('/login')
    async login(@Body() credentials:{username:string;password:string}){
        const usersService:UserService=new UserService();
        const isCorrect=await usersService.validateCredentials(credentials.username,credentials.password);
        if(isCorrect){
          return{
            success:true,
            message:'登录成功',
          }
        }
        else{
          return{
            success:false,
            message:'登录失败'
          }
        }
      }
}