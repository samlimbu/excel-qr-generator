import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommService {
  private messageSource = new Subject();
  dataLoadedMessage = this.messageSource.asObservable();
  constructor(
      
  ) { }

  setMessage(message) {
      this.messageSource.next(message);
  }

  getMessage(): Observable<any> {
      return this.messageSource.asObservable();
  }
}
