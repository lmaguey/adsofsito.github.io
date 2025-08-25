import { Component } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience-service/work-experience.service';
import { WorkExperience } from '../models/work-experience/work-experience.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {

    workExperience: WorkExperience[] = [];


   constructor(public workExperienceService: WorkExperienceService)
    {
       this.workExperienceService.getWorkExperience().subscribe(data => {
          if (data && data.length > 0) {
           this.workExperience = data; // obtienes el primer documento de la colección
           console.log('Workexperience recibido:', this.workExperience);
        } else {
           console.warn('No se encontró ningún workexperience en Firestore');
        }
       });


       // console.log(this.workExperienceService);
    }

}
