import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServices {

  private userSubject:BehaviorSubject<string>;
  userObservable:Observable<string>;
  constructor() { 
    this.userSubject = new BehaviorSubject<string>("");
    this.userObservable = this.userSubject.asObservable();
  }

  updateAuthor(name:string){
    this.userSubject.next(name);
  }
}
