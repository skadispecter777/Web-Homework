import { Body, Controller, Get, Inject, Post } from "@midwayjs/core";
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

    @Get()
    public async fetch() {
        return this.taskService.fetch();
    }

    
}