import React from "react";
import "./condition-button.css";
//任务状态栏
function Condition_button(things) {
    return (<>
        <button type="button" class="condition" aria-pressed={things.isPressed} onClick={()=>things.set_condition(things.name)}>
            {things.name}
        </button>
    </>)
}
export default Condition_button;