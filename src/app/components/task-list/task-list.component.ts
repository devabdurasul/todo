import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../../core/data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  isEditing = false;
  todoForm: FormGroup;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.initForm();
  }

  add() {
    if (this.todoForm.value.task) {
      this.dataService.data.push({
        value: this.todoForm.value.task,
        status: false,
        date: new Date()
      });
      this.todoForm.reset();
    }
  }

  remove(i) {
    if (i || i === 0) {
      this.dataService.data.splice(i, 1);
    }
  }

  edit(i) {
    this.dataService.activeIndex = i;
    this.isEditing = true;
  }

  onClosePopup(e) {
    this.isEditing = e;
  }

  private initForm() {
    this.todoForm = new FormGroup({
      task: new FormControl('')
    });
  }

}
