import React from "react"
import './task.css'
import Todo from './todo'

function Task() {
    return (
        <>
            <div class="task-page">
                <div class="task-title">
                    <h1>欢迎使用待办清单</h1>
                    <h2>在下方输入框中输入你想要完成的任务</h2>
                </div>
                <form>
                    <input
                        type="text"
                        id="input-todo-things"
                        class="things-input"
                        name="text"
                        autoComplete="off" />
                    <br />
                    <button type="submit" class="input-things-button">点击创建待办任务喵</button>
                </form>
                <div class="three-conditions">
                    <button type="button" class="condition" aria-pressed="true">
                        <span>待办任务</span>
                    </button>
                    <button type="button" class="condition" aria-pressed="false">
                        <span>进行中的任务</span>
                    </button>
                    <button type="button" class="condition" aria-pressed="false">
                        <span>已完成的任务</span>
                    </button>
                </div>

                <ul role="list" class="todo-list" aria-labelledby="list-heading">
                    <Todo/>
                </ul>

            </div>

        </>
    )
}
export default Task;