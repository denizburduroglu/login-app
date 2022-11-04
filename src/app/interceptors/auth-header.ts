import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CONSTANTS } from '../global/constant-variables';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
      Observable<HttpEvent<any>> {
      
    if (req.url.includes(environment.loginRestApiUrl)) {
        return next.handle(req.clone({
            headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem(CONSTANTS.LOGIN_REST_API_TOKEN_LOCAL_STORAGE) ?? ''}`)
        }));
    }

    return next.handle(req);
  }
}