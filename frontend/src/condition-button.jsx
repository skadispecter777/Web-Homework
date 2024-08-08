import React from "react";
import "./condition-button.css";
//任务状态栏
function Condition_button() {
    return (<>

        <button type="button" class="condition" aria-pressed="true">
            <span>待办任务</span>
        </button>
        {/* <button type="button" class="condition" aria-pressed="false">
                <span>进行中的任务</span>
            </button>
            <button type="button" class="condition" aria-pressed="false">
                <span>已完成的任务</span>
            </button> */}

    </>)
}

export default Condition_button;