import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  private bgColor = new BehaviorSubject<string>("");

  setBgColor(value: string) {
    this.bgColor.next(value);
  }

  getBgColorByValue() {
    return this.bgColor.asObservable();
  }

}
