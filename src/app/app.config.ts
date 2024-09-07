import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoListReducer } from './ngrx/state/todo-list.reducer';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideStore(),
    provideStoreDevtools(),
    provideState({ name: 'TodoList', reducer: todoListReducer }),
  ],
};
