import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoItemModel } from './models/to-do-item.model';
import { ToDoDtoModel } from './models/to-do-dto.model';
import { environment } from 'src/environments/environment';

const BE_PORT = environment.backendPort || 3000;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly hostname = 'http://localhost';
  private readonly backendPort = BE_PORT;
  private readonly baseUrl = 'api/v1';
  private readonly route = 'todos';
  private readonly toDosEndpoint = `${this.hostname}:${this.backendPort}/${this.baseUrl}/${this.route}`;

  constructor(private http: HttpClient) { }

  public getToDos(): Observable<Array<ToDoItemModel>> {
    const url = this.toDosEndpoint;
    return this.http.get<Array<ToDoItemModel>>(url);
  }

  public addToDo(nextToDo: ToDoDtoModel): Observable<any> {
    const url = this.toDosEndpoint;
    return this.http.post(url, { ...nextToDo });
  }

  public removeToDo(id: number): Observable<any> {
    const url = `${this.toDosEndpoint}/${id}`;
    return this.http.delete(url);
  }
}
