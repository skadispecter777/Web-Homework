import React from "react"
import {nanoid} from "nanoid"
import './task.css'
import Todo from './todo'
import Task_header from "./task-header"
import Condition_button from "./condition-button"
import { useState } from "react"
//任务界面
function Task(things) {
    const [tasks,set_tasks]=useState(things.tasks);
    const task_list=tasks.map((task)=>(<Todo 
        id={task.id} 
        name={task.name} 
        isComplete={task.isComplete} 
        key={task.id} 
        set_task_completed={set_task_completed}
        delete_task={delete_task}/>));
    
    function add_task(task_name){
        const new_task={id:`todo-${nanoid()}`,name:task_name,isComplete:false};
        set_tasks([...tasks,new_task]);
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

    return (
        <>
            <div class="task-page">
                <div class="task-title">
                    <h1>欢迎使用待办清单</h1>
                    <h2>在下方输入框中输入你想要完成的任务</h2>
                </div>
                <Task_header add_task={add_task}/>
                <div class="three-conditions">
                    <Condition_button />
                    <Condition_button />
                    <Condition_button />
                </div>
                <ul role="list" class="todo-list" aria-labelledby="list-heading">
                    {task_list}
                </ul>

            </div>

        </>
    )
}
export default Task;