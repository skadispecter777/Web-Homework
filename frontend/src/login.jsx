import React from "react"
import { useState } from "react"
import './login.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';



function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history=useNavigate();
    //提交 
    // const handleSubmit = async (submission) => {
    //     submission.preventDefault();
    //     try{
    //         const result=await axios.post('/login',{
    //             username,
    //             password,
    //         });
    //         if(result.data.success){
    //             alert('登录成功');
    //         }
    //         else{
    //             alert('登录失败');
    //         }
    //     }
    //     catch(error){
    //         console.error('请求错误了喵',error);
    //     }
    // };

    const handleSubmit=()=>{
        if(username==='Neal'&&password==='12345678'){
            // alert('登录成功');
            history('/list');
        }
        else if(username===''||password===''){
            alert('用户名或密码为空');
        }
        else{
            alert('登录失败');
        }
    }
    return (
        <>
            <div class="login-header">
                <p>尼尔敏捷看板</p>
            </div>
            <form id="loginForm" onSubmit={handleSubmit}>
                <div class="login-border">
                    <h2>请登录</h2>
                    <div class="form-input">
                        <label for="username">用户名</label>
                        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
                    </div>
                    <div class="form-input">
                        <label for="password">密码</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <button class="login-button" type="submit">登录</button>
                </div>
            </form>

            <div class="login-tail">
                <p>您每使用一次敏捷看板，都能助你更高效完成任务</p>
            </div>
        </>
    )
}

export default Login