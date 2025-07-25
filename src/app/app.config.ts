import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter,withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideNativeDateAdapter } from '@angular/material/core';
import { authInterceptor } from './interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes,withComponentInputBinding()),provideHttpClient(withInterceptors([authInterceptor])),provideNativeDateAdapter()]
};
