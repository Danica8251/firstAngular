/**
 * 把由 API 讀取回來的 Token 儲存在 local 瀏覽器中的 Session Local Storage 中。
*/
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { } // 構造函數

  /**
   * 這個signOut方法在用戶登出時會被調用，它通過清除瀏覽器的會話存儲來移除所有會話期間存儲的數據。
   * 這樣可以確保用戶的會話數據不再保留在瀏覽器中，達到安全登出的目的。
  */
  signOut(): void {
    // window.sessionStorage是一個Web API，它允許你在用戶瀏覽器的會話期間存儲數據。會話存儲中的數據在用戶關閉瀏覽器或標籤頁時會被清除。
    // clear()方法是sessionStorage對象上的一個方法，它會清除所有儲存在會話存儲中的數據。
    window.sessionStorage.clear(); 
  }

  public saveToken(token: string): void {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    sessionStorage.removeItem(USER_KEY);
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return user;
  }

}
