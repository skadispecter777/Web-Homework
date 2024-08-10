import { IUserOptions } from "./interface";

const users:IUserOptions[]=[
    {username:'Neal',password:'12345678'},
    {username:'Skadi',password:'skadi777'},
    {username:'Miku',password:'luka0831'},
    {username:'ichika',password:'saki'}
]

export function find_user_by_name(username:string):IUserOptions|undefined{
    return users.find(target_user=> target_user.username === username)
}