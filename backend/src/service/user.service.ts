import { Provide } from '@midwayjs/core';
import { IUserOptions } from '../interface';

@Provide()
export class UserService {
  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  } 
  async validateCredentials(username:string,password:string):
  Promise<boolean>{
      const user=await this.findUser(username);
      return user&&user.password==password;
  }

  async findUser(username:string):Promise<any>{
    return {username:'Neal',password:'12345678'}
  }

}
