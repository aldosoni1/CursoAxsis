import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotifyService } from './notify.service';
import { UserService } from './user.service';
import { IResponse } from '@core/models/IResponse.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private userService: UserService,
    private notifyService: NotifyService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = this.addToken(req);
    return next.handle(req).pipe(
      catchError((ex: HttpErrorResponse) => {
        if (ex.status === 400) {
          this.notifyService.mostrarNotificacion('danger', ex.error.ResponseMessage);
        } else {
          const respuesta: IResponse = ex.error;
          this.notifyService.mostrarNotificacion('danger', respuesta.responseMessage);
        }
        return throwError(ex);
      })
    );
  }

  private addToken(req: HttpRequest<any>): HttpRequest<any> {
    const token = this.userService.getToken();
    if (token && token !== '') {
      req = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      });
    }
    return req;
  }
}
