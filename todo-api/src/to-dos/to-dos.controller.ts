import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { ToDoItemModel } from 'src/models/todo-item.model';
import { ToDosService } from './to-dos.service';
import { ToDoItemDto } from 'src/models/todo-item.dto';

@Controller('todos')
export class ToDosController {

  constructor(private toDos: ToDosService) {}
  
  @Get()
  public async getToDos(): Promise<Array<ToDoItemModel>> {
    return this.toDos.getToDoItems();
  }

  @Post()
  public async createToDo(@Body() nextToDoItem: ToDoItemDto): Promise<any> {
    return this.toDos.addToDoItem(nextToDoItem);
  }

  @Get(':id')
  public async getToDo(@Param('id') id): Promise<Array<ToDoItemModel>> {
    return this.toDos.getToDoItem(id);
  }

  @Put(':id')
  public async putToDo(@Param('id') id, @Body() nextToDoItem: ToDoItemDto): Promise<void> {
    return this.toDos.updateToDoItem(id, nextToDoItem);
  }

  @Delete(':id')
  public async deleteToDo(@Param('id') id): Promise<void> {
    return this.toDos.removeToDoItem(id);
  }
}
