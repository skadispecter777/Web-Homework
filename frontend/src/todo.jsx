import React from "react";
import './todo.css';
//具体任务板块
function Todo(things) {
    return (
        <>
            <li class="things-todo">
                <div class="for-each-todo-thing">
                    <input id={things.id} type="checkbox" defaultChecked={things.isComplete} onChange={()=>things.set_task_completed(things.id)}/>
                    <label class="todo-things-label" htmlFor={things.id}>
                        {things.name}
                    </label>
                </div>
                <div class="edit-buttons">
                    <button type="button" class="edit-to-do">
                        移至进行中
                    </button>
                    <button type="button" class="edit-to-do" onClick={()=>things.delete_task(things.id)}>
                        删除
                    </button>
                    <button type="button" class="edit-to-do">
                        评论
                    </button>
                </div>
            </li>
        </>
    )

}

export default Todo;