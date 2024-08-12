import { Provide } from "@midwayjs/core";
import { Task } from "../model/task.model";
import * as fs from 'fs'
import * as path from 'path'


@Provide()
export class TaskService {

    public async create(new_task: Task) {
        // fs.writeFile(path.join("D:", "task.json"), JSON.stringify(task), () => {
        //     console.log("写入成功");
        // })
        const task_path=path.resolve(__dirname,'../task.storage.json');
        const tasks=JSON.parse(fs.readFileSync(task_path,'utf-8'));
        tasks.push(new_task)
        fs.writeFileSync(task_path,JSON.stringify(tasks,null,2),'utf-8');
    }

    public async delete_ongoing_completed(remaining_tasks:Task[]){
        const task_path=path.resolve(__dirname,'../task.storage.json');
        let tasks=JSON.parse(fs.readFileSync(task_path,'utf-8'));
        tasks=[...remaining_tasks];
        fs.writeFileSync(task_path,JSON.stringify(tasks,null,2),'utf-8');
    }


    public fetch(): Task {
        const task_path=path.resolve(__dirname,'../task.storage.json');
        const data = JSON.parse(fs.readFileSync(task_path, 'utf-8'));
        return data;
    }
}