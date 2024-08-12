import { Body, Controller, Get, Inject, Post,Put } from "@midwayjs/core";
import { TaskService } from "../service/task.service";
import { Task } from "../model/task.model";

@Controller("/task")
export class TaskController {

    @Inject()
    taskService: TaskService;

    @Post()
    public async create(@Body() body:{new_task:Task}) {
        this.taskService.create(body.new_task);
        return{
            success:true,
            message:"创建成功"
          }
    }

    @Put()
    public async delete_ongoing_completed(@Body() body:{remaining_tasks:Task[]}){
        this.taskService.delete_ongoing_completed(body.remaining_tasks);
        return{
            success:true,
            message:"删除成功"
        }
    }
    
    @Get()
    public async fetch() {
        return this.taskService.fetch();
    }

    
}