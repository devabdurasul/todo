import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements OnInit {

  @Output() closePopup = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onPopupClose() {
    this.closePopup.emit(false);
  }

}
