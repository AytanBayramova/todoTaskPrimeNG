import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _http: HttpClient) { }

  addTask(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/todo', data);
  }

  updateTask(id:number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/todo/${id}`, data);
  }

  getTaskList(): Observable<any> {
    return this._http.get('http://localhost:3000/todo');
  }

  deleteTask(id: number): Observable<any> {
    const url = `http://localhost:3000/todo/${id}`; // Construct the URL with the correct id
    return this._http.delete(url);
  }
  
}
