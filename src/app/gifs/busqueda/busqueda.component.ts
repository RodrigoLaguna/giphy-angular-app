import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  // @param { ElementRef<HTMLInputElement> } txtBuscar - Referencia al input
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor( private gifService: GifsService) { }

  buscar( palabra:string ) {

    // Recibimos un parametro de tipo ElementRef<HTMLInputElement>
    // console.log('txtBuscar',this.txtBuscar);

    // Obtenemos el valor del input
    const valor = this.txtBuscar.nativeElement.value;
    // console.log('valor',valor);

    // Validamos que el valor no sea vacio para no agregarlo al historial
    if ( valor.trim().length === 0 ) {
      return;
    }


    // Guardar el valor en el historial
    this.gifService.buscarGifs( valor );

    // reiniar el valor del input
    this.txtBuscar.nativeElement.value = '';
  }

}
