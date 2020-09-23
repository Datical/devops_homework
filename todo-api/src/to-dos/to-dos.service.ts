import { Injectable, Inject } from '@nestjs/common';
import { Client } from 'pg';
import { ToDoItemModel } from '../models/todo-item.model';
import { ToDoItemDto } from 'src/models/todo-item.dto';

@Injectable()
export class ToDosService {

  constructor(@Inject('DATABASE_CONNECTION') private connectedClient: Client) {}

  public async getToDoItems(): Promise<Array<ToDoItemModel>> {
    const query = 'SELECT * FROM app_schema.todo_items ORDER BY id ASC';
    const result = await this.connectedClient.query(query);
    return result.rows;
  }

  public async getToDoItem(id: number): Promise<Array<ToDoItemModel>> {
    const query = 'SELECT * FROM app_schema.todo_items WHERE id = $1';
    const result = await this.connectedClient.query(query, [id]);
    return result.rows;
  }

  public async addToDoItem(newToDoItem: ToDoItemDto): Promise<void> {
    const query = 'INSERT INTO app_schema.todo_items (description) VALUES ($1)';
    await this.connectedClient.query(query, [newToDoItem.description]);
  }

  public async updateToDoItem(id: number, nextToDoItem: ToDoItemDto): Promise<void> {
    const query = 'UPDATE app_schema.todo_items SET description = $2 WHERE id = $1';
    await this.connectedClient.query(query, [id, nextToDoItem.description]);
  }

  public async removeToDoItem(id: number): Promise<void> {
    const query = 'DELETE FROM app_schema.todo_items WHERE id = $1'
    await this.connectedClient.query(query, [id]);
  }
}
