import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoListFeatureName } from './@ngrx/store/todo-list/todo-list';
import { todoListReducer } from './@ngrx/store/todo-list/todo-list.reducer';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideStore(),
    provideStoreDevtools(),
    provideState({ name: todoListFeatureName, reducer: todoListReducer }),
  ],
};
