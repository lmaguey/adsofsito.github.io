import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguagesComponent } from './languages/languages.component';
import { InterestsComponent } from './interests/interests.component';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, WorkExperienceComponent,
            EducationComponent, CertificatesComponent, SkillsComponent, 
            LanguagesComponent, InterestsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private firestore: Firestore) {}
  title = 'mycv';

  async ngOnInit() {
     const querySnapshot = await getDocs(collection(this.firestore, 'test'));
     querySnapshot.forEach((doc) => {
       console.log(`${doc.id} =>`, doc.data());
     });

   }
}
