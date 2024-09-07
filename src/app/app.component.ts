import { Component } from '@angular/core';
import { TodoListComponent as NgrxStoreTodoListComponent } from './@ngrx/store/todo-list/todo-list.component';
import { TodoListComponent as NgrxComponentStoreTodoListComponent } from './@ngrx/component-store/todo-list/todo-list.component';
import { TodoListComponent as NgrxSignalsTodoListComponent } from './@ngrx/signals/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgrxStoreTodoListComponent,
    NgrxComponentStoreTodoListComponent,
    NgrxSignalsTodoListComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-state-management';
}
