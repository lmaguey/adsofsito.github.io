import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [
     provideRouter(routes),
     provideFirebaseApp(() =>
        initializeApp({
            apiKey: "AIzaSyDQiu2zW9iGIWQ1ecsqyCnbx5_Kb5fdh8s",
            authDomain: "my-cv-8d48f.firebaseapp.com",
            projectId: "my-cv-8d48f",
            storageBucket: "my-cv-8d48f.firebasestorage.app",
            messagingSenderId: "1021445641929",
            appId: "1:1021445641929:web:6f8bc7c832f46a3d295f18"            
            })
      ),
     provideFirestore(() => getFirestore()),
     provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    ],
};
