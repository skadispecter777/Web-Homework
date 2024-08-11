import React from "react"
import {nanoid} from "nanoid"
import axios from 'axios'
import './task.css'
import Todo from './todo'
import Task_header from "./task-header"
import Condition_button from "./condition-button"
import { useState } from "react"
//任务界面
axios.defaults.baseURL='http://127.0.0.1:7002';
const condition_map={
    待办任务:(task)=>!task.isComplete&&!task.isOngoing,
    进行中的任务:(task)=>!task.isComplete&&task.isOngoing,
    已完成的任务:(task)=>task.isComplete,
};
const condition_names=Object.keys(condition_map);

function Task(things) {
    const [tasks,set_tasks]=useState(things.tasks);
    const [condition,set_condition]=useState("待办任务");

    const task_list=tasks.filter(condition_map[condition]).map((task)=>(<Todo 
        id={task.id} 
        name={task.name} 
        isComplete={task.isComplete}
        isOngoing={task.isOngoing} 
        key={task.id} 
        set_task_completed={set_task_completed}
        set_task_ongoing={set_task_ongoing}
        delete_task={delete_task}/>));

    const condition_buttons=condition_names.map((name)=>(<Condition_button 
        key={name} 
        name={name}
        isPressed={name===condition}
        set_condition={set_condition}/>))
    
    async function add_task(task_name){
        const new_task={id:`todo-${nanoid()}`,name:task_name,isComplete:false,isOngoing:false};
        try{
            const response=await axios.post('/task',{new_task:new_task});
            if(response.data.success){
                set_tasks([...tasks,new_task]);
                try{
                    const response1=await axios.get('/task');
                    things.tasks=[...response1.data]
                    return response1.data;
                }
                catch{
                    alert('获取失败')
                }
            }
            else{
                throw new Error('创建任务失败')
            }
        }
        catch{
            alert('失败');
        }
         
    }

    function delete_task(id){
        const remaining_tasks=tasks.filter((task)=>id!==task.id);
        set_tasks(remaining_tasks);
    }

    function set_task_completed(id){
        const changed_tasks=tasks.map((task)=>{
            if(id===task.id){
                return {...task,isComplete:!task.isComplete};
            }
            return task;
        });
        set_tasks(changed_tasks);
    }

    function set_task_ongoing(id){
        const change_tasks=tasks.map((task)=>{
            if(id===task.id){
                return {...task,isOngoing:!task.isOngoing};
            }
            return task;
        });
        set_tasks(change_tasks);
    }

    return (
        <>
            <div class="task-page">
                <div class="task-title">
                    <h1>欢迎使用待办清单</h1>
                    <h2>在下方输入框中输入你想要完成的任务</h2>
                </div>
                <Task_header add_task={add_task}/>
                <div class="three-conditions">
                    {condition_buttons}
                </div>
                <ul role="list" class="todo-list" aria-labelledby="list-heading">
                    {task_list}
                </ul>
                <div>
                    <a href="https://www.bilibili.com/video/BV1wx411p73F/?spm_id_from=333.337.search-card.all.click&vd_source=00fde21cc545dada19088a8a24d368b5" class="private">这里通往作者最喜欢的一首歌，不妨听听</a>
                </div>
            </div>

        </>
    )
}
export default Task;