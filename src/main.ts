import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

/*
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
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
      provideFirestore(() => getFirestore())
    )
  ]
});
*/

 bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
