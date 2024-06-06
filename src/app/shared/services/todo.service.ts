/**
 * todo service 是藉由 後端的 Web API 來完成 Todo 資料的新增、修改、刪除、查詢等資料庫功能。
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { AppSettings } from '../helpers/appSettings';

const API_URL = AppSettings.API_URL + 'todos/';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // constructor 注入了 HttpClient，這樣就可以在這個服務中使用 HttpClient 來發送 HTTP 請求。
  constructor(private http: HttpClient) { }

  /**
   * getAll 方法發送一個 GET 請求來獲取所有待辦事項，並返回一個 Observable，其中包含待辦事項的陣列。
  */
  getAll(id: any): Observable<Todo[]> {
    return this.http.get<Todo[]>(API_URL);
  }

  /**
   * get 方法發送一個 GET 請求來獲取特定的待辦事項，根據給定的 ID 返回一個 Observable，其中包含該待辦事項的資料。
  */
  get(id: any): Observable<Todo> {
    return this.http.get(`${API_URL}/${id}`);
  }

  /**
   * create 方法發送一個 POST 請求來創建新的待辦事項，並返回一個 Observable，其中包含創建操作的結果。
  */
  create(data: any): Observable<any> {
    return this.http.post(API_URL, data);
  }

  /**
   * update 方法發送一個 PUT 請求來更新特定的待辦事項，根據給定的 ID 和數據返回一個 Observable，其中包含更新操作的結果。
  */
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, data);
  }

  /**
   * delete 方法發送一個 DELETE 請求來刪除特定的待辦事項，根據給定的 ID 返回一個 Observable，其中包含刪除操作的結果。
  */
  delete(id: any): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }

  /**
   * deleteAll 方法發送一個 DELETE 請求來刪除所有的待辦事項，並返回一個 Observable，其中包含刪除操作的結果。
  */
  deleteAll(): Observable<any> {
    return this.http.delete(API_URL);
  }

  /**
   * findByTitle 方法發送一個 GET 請求來根據標題查找待辦事項，並返回一個 Observable，其中包含符合條件的待辦事項的陣列。
  */
  findByTitle(title: any): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${API_URL}?title=${title}`);
  }

}
