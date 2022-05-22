import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private apiKey     : string = 'cHts0nz7NHp158n4Y44Z01UrfFaobKSr';
  private _historial : string[] = [];

  // TODO: cambiar any por su tipo correspondiente
  resultados: Gif[] = [];

  get historial(): string[] {
    // Romper referencia con el operador spreat
    return [...this._historial];
  }

  constructor( private http: HttpClient ) {
    // Recuperar historial de busquedas del localStorage
    this._historial = JSON.parse( localStorage.getItem('historial')! ) || [];
    this.resultados = JSON.parse( localStorage.getItem('resultados')! ) || [];

  }


  buscarGifs( query:string = '' ){

    // Capitalizar a minusculas
    query = query.trim().toLowerCase();

    // Si la palabra no existe en el historial se añade
    if ( !this._historial.includes( query ) ) {
      // agregar uno o más elementos al comienzo de una matriz
      this._historial.unshift( query );
      // Limitar el numero de busquedas
      this._historial = this.historial.splice(0,10);

      // Grabar en localStorage
      localStorage.setItem('historial', JSON.stringify( this.historial ) );
  }

  // Parametros de la peticion
  const params = new HttpParams()
                      .set( 'api_key', this.apiKey )
                      .set( 'limit', '10' )
                      .set( 'q', query );

    // Lamamos a la API
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{ params })
          .subscribe( ( resp ) => {
            // console.log( resp.data );
            this.resultados = resp.data;
            localStorage.setItem('resultados', JSON.stringify( this.resultados ) );
          });



    // console.log(this._historial);
  }
}
