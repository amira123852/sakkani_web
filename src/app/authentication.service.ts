import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './models/user.model';
import { environment } from 'src/environments/environment';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string):Observable<any> {
      let _user;
      return this.http.post<any>(`${environment.baseURL}/users/authenticate`, { email, password })
          .pipe(map(response => {
            _user = {...response.payload.user};
            _user.token = response.payload.token;

              // login successful if there's a jwt token in the response
            if (_user && _user.token && response.status==="success") {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(_user));
                  this.currentUserSubject.next(_user);
              }

            return _user;
          }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }


  }
