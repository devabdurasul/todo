import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditTaskComponent } from './layout/edit-task/edit-task.component';
import { BackdropComponent } from './layout/backdrop/backdrop.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    EditTaskComponent,
    BackdropComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
