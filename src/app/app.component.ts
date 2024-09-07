import { Component } from '@angular/core';
import { TodoListComponent } from './ngrx/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-state-management';
}
