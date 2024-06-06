/**
 * 註冊與登入功能須搭配後端 API
*/

import { Injectable } from '@angular/core'; // 這行代碼從Angular核心庫中導入了Injectable裝飾器。這個裝飾器標誌著這個類可以被注入到其他類中作為依賴。
import { HttpClient } from '@angular/common/http'; // 這行代碼從Angular的HTTP庫中導入了HttpClient。HttpClient是一個服務，用於執行HTTP請求。
import { Observable } from 'rxjs'; // 這行代碼從rxjs庫中導入了Observable。Observable是一個幫助處理異步數據流的類。
import { AppSettings } from '../helpers/appSettings'; // 這行代碼從一個本地文件中導入了AppSettings。AppSettings通常用於存儲應用程序的配置設置，例如API的URL。

const API_URL = AppSettings.API_URL + 'auth/';


/**
 * Injectable 是一個裝飾器函數，用來標記一個類可以被 Angular 的依賴注入系統管理。
 * 這個裝飾器可以接受一個配置對象，用來定義服務的注入範圍。常見的配置選項是 providedIn，
 * 用來指定這個服務在哪個注入器中可用。
*/
@Injectable({
  providedIn: 'root'
})

/**
 * 這個AuthService服務負責處理用戶的登入和註冊操作。
 * 通過使用HttpClient，它將用戶名、密碼（以及註冊時的電子郵件）發送到相應的API端點，
 * 並返回一個Observable，讓調用者可以訂閱和處理伺服器的響應。
*/
export class AuthService {

  constructor( private http: HttpClient ) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(API_URL + 'signin', {
      username,
      password
    })
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(API_URL + 'signup', {
      username,
      email,
      password
    })
  }

}
