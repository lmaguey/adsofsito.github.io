import { Component } from '@angular/core';
import { HeaderService } from '../services/header-service/header.service';
import { Header } from '../models/header/header.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

     header: Header = new Header();

     constructor(public headerService: HeaderService)
       {
         console.log(this.headerService);

         this.headerService.getHeader().subscribe(data => {
           if (data && data.length > 0) {
              this.header = data[0]; // obtienes el primer documento de la colección
              console.log('Header recibido:', this.header);
           } else {
              console.warn('No se encontró ningún header en Firestore');
           }
          });

     
        /*
         this.headerService.getHeader().pipe(
           map(changes =>
             changes.map(c =>
                ({ id: c.payload.doc.id, ...c.payload.doc.data() })
              )
           )
         ).subscribe(data => {
           this.header = data[0];
           console.log(this.header);
         });
        */
    
      }

}
