import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {catchError, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<User>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint='/users';
  }

  getByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.resourcePath()}/${email}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  /*getByEmail(email:string): Observable<User> {
    const query = `email=${email}`;
    return this.getByQuery(query);
  }*/
}
