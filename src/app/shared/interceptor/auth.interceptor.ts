/**
 * HTTP Interceptor 可以讓我們很容易的在每一個 request Header 中
 * 加入我們登入成功後由 API 回傳回來的｀合法Token`。在這個程式中
 * 唯一要注意的是，不應更改原始的 request，而是應該透過 clone 功能
 * 來産生一個新的 request 再將 token 寫入這個新 request 的 Header。
*/
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http'
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable()
export class authInterceptor implements HttpInterceptor{

  constructor(private tokenService: TokenStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
    let authRequest = request;
    const token = this.tokenService.getToken();

    if (token != null) {
      authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(authRequest);
  }
}

export const authInterceptorProviders = [{
  provide: HTTP_INTERCEPTORS,
  useClass: authInterceptor,
  multi: true
}]
