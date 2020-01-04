import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = [];
  activeIndex;

  constructor() {
  }

  getTask() {
    if (this.activeIndex || this.activeIndex === 0) {
      return this.data[this.activeIndex];
    }
  }

  updateTask(task) {
    this.data[this.activeIndex] = task;
  }

}
