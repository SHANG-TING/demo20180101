import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(private _http: HttpClient) { }

  public upload(formData: FormData): Observable<any> {
    return this._http.post('/api/values/upload', formData);
  }

}
