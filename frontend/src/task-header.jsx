import React from "react";
import "./task-header.css";
import { useState } from "react";
//创建板块
function Task_header(things) {

    const [name,set_task_name]=useState("");

    function create_task(to_be_create){
        set_task_name(to_be_create.target.value);
    }

    function submit(event){
        event.preventDefault();
        things.add_task(name);
        set_task_name("");
    }

    return (<>
        <form onSubmit={submit}>
            <input
                type="text"
                id="input-todo-things"
                class="things-input"
                name="text"
                autoComplete="off" 
                value={name}
                onChange={create_task}/>
            <br />
            <button type="submit" className="input-things-button">点击创建待办任务喵</button>
        </form>
    </>)
}

export default Task_header;