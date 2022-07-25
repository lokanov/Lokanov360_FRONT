import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenStorageService } from '../_service/token-storage.service';
// #docregion
import { AuthService } from '../_service/auth.service'; 
import { Observable } from 'rxjs';


const TOKEN_HEADER_KEY = 'Authorization'
@Injectable()
export class AuthInterceptor  {

  constructor(private tokenStorageService: TokenStorageService) {}
}
/*
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     let authReq = req
     const token = this.token.getToken();
if(token != null)
{
    authReq = req.clone({
        headers: req.headers.set(TOKEN_HEADER_KEY,'Bearer ' + token)
      });
}
    return next.handle(authReq);
  }

 
}
export const authInterceptorProviders =[
    {provide : HTTP_INTERCEPTORS, userClass: AuthInterceptor, multi : true}
];
*/
