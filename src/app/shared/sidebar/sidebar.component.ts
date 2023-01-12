import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get historial(){ //esto lo necesito para poder modificar el html
    return this.gifsService.historial;
  }

  constructor( private gifsService: GifsService){ }

  buscar( termino: string){
    this.gifsService.buscarGifs(termino);
  }
}
