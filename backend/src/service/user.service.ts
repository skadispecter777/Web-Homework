import { Provide } from '@midwayjs/core';
import { IUserOptions } from '../interface';
import { find_user_by_name } from '../user.storage';

@Provide()
export class UserService {
  async getUser(options: IUserOptions) {
    return {
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  } 
  async validateCredentials(username:string,password:string):
  Promise<boolean>{
      const user=find_user_by_name(username);
      if(user){
        return user.password===password;
      }
      return false;
  }

}
