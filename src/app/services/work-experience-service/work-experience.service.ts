import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { WorkExperience } from '../../models/work-experience/work-experience.model';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  accesoWorkExperience = "work experience running...";

  private dbPath = 'work-experience';

   
   constructor(private firestore: Firestore) {}


   // 🔹 Obtener todos los headers (se actualiza en tiempo real)
  getWorkExperience(): Observable<WorkExperience[]> {
    const workexperienceRef = collection(this.firestore, this.dbPath);
    return collectionData(workexperienceRef, { idField: 'id' }) as Observable<WorkExperience[]>;
  }

  // 🔹 Agregar un nuevo heaexperiencec
   addWorkExperience(workExperience: WorkExperience) {
   const workexperienceRef = collection(this.firestore, this.dbPath);
    return addDoc(workexperienceRef, workExperience);
  }

  // 🔹 Actualizar un heaworkexperienceistente
  updateWorkExperience(id: string, data: Partial<WorkExperience>) {
    const workexperienceDoc = doc(this.firestore, `${this.dbPath}/${id}`);
    return updateDoc(workexperienceDoc, data);
  }

  // 🔹 Eliminar un header
  deleteWorkExperience(id: string) {
    const workexperienceDoc = doc(this.firestore, `${this.dbPath}/${id}`);
    return deleteDoc(workexperienceDoc);
  }

}
