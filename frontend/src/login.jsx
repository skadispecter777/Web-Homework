import React from "react"
import { useState } from "react"
import './login.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

axios.defaults.baseURL='http://127.0.0.1:7002';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history=useNavigate();

    const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
            const response=await axios.post('/login',{
                username:username,
                password:password
            });
            if(response.data.success){
                history('/task');
            }
            else{
                throw new Error('登录失败')
            }
        }
        catch(error){
            alert(error.message);
        }
    }
    return (
        <>
        <div className="login-page">
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
        </div>
            
        </>
    )
}

export default Login