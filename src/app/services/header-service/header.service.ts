import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Header } from '../../models/header/header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  
  accesoHeader = 'header service running...';

  private dbPath = 'header'; // nombre de la colección en Firestore

  constructor(private firestore: Firestore) {}

  // 🔹 Obtener todos los headers (se actualiza en tiempo real)
  getHeader(): Observable<Header[]> {
    const headerRef = collection(this.firestore, this.dbPath);
    return collectionData(headerRef, { idField: 'id' }) as Observable<Header[]>;
  }

  // 🔹 Agregar un nuevo header
  addHeader(header: Header) {
    const headerRef = collection(this.firestore, this.dbPath);
    return addDoc(headerRef, header);
  }

  // 🔹 Actualizar un header existente
  updateHeader(id: string, data: Partial<Header>) {
    const headerDoc = doc(this.firestore, `${this.dbPath}/${id}`);
    return updateDoc(headerDoc, data);
  }

  // 🔹 Eliminar un header
  deleteHeader(id: string) {
    const headerDoc = doc(this.firestore, `${this.dbPath}/${id}`);
    return deleteDoc(headerDoc);
  }
}



