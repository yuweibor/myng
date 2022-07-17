import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }
  getData(d: any) {
    return new Promise(e => {
      setTimeout(() => {
        console.log(334455);
        e(d);
      }, 2000)
    })
  }
  getRxData(d: string) {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(d);
      }, 3000)
    })
  }
}
