import React from "react";
import './todo.css';

function Todo() {
    return (
        <>
            <li class="things-todo">
                <div class="for-each-todo-thing">
                    <input id="todo-1" type="checkbox" defaultChecked={true} />
                    <label class="todo-things-label" htmlFor="todo-1">
                        完成大作业
                    </label>
                </div>
                <div class="edit-buttons">
                    <button type="button" class="edit-to-do">
                        移至进行中
                    </button>
                    <button type="button" class="edit-to-do">
                        删除
                    </button>
                </div>
            </li>
        </>
    )

}

export default Todo;