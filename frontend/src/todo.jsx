import React from "react";
import './todo.css';
//具体任务板块
function Todo(things) {
    return (
        <>
            <li className="things-todo">
                <div className="for-each-todo-thing">
                    <input id={things.id} type="checkbox" defaultChecked={things.isComplete} onChange={()=>things.set_task_completed(things.id)}/>
                    <label className="todo-things-label" htmlFor={things.id}>
                        {things.name}
                    </label>
                </div>
                <div className="edit-buttons">
                    <button type="button" className="edit-to-do" onClick={()=>{if(!things.isOngoing){things.set_task_ongoing(things.id)}}}>
                        移至进行中
                    </button>
                    <button type="button" className="edit-to-do" onClick={()=>things.delete_task(things.id)}>
                        删除
                    </button>
                </div>
                <form className="comments">
                    <label>评论</label>
                    <input type="text"/>
                    <button type="submit" className="comments-button">上传评论</button>
                </form>
                <form className="file">
                    <label>上传附件</label>
                    <input type="file"/>
                </form>
            </li>
        </>
    )

}

export default Todo;