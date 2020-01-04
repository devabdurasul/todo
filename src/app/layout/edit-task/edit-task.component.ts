import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from '../../core/data.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  activeTask;
  @Output() closePopup = new EventEmitter();

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.getActiveTask();
  }

  onClosePopup(e) {
    this.closePopup.emit(e);
  }


  private getActiveTask() {
    this.activeTask = this.dataService.getTask();
  }

}
