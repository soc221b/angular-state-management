import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private http = inject(HttpClient);

  getTodoList(): Observable<Todo[]> {
    return of([
      { id: 1, title: 'Learn Angular', completed: false },
      { id: 2, title: 'Build an app', completed: false },
    ]);
  }
}
