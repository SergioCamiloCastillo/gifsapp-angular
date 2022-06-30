import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  private apiKey: string = 'gImX2b1jM1O2RXEp2rQdgKCkHECDOLsV';
  private servicioUrl: string = 'http://api.giphy.com/v1/gifs';
  public resultados: Gif[] = [];
  public ultimaConsulta: string = '';

  get historial() {
    return [...this._historial];
  }
  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.ultimaConsulta =
      JSON.parse(localStorage.getItem('historial')!)[0] || [];
    this.buscarGifs(this.ultimaConsulta || '');
  }

  buscarGifs(query: string) {
    query = query.toLocaleLowerCase();

    if (query && !this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);
    console.log(params.toString());
    this.http
      .get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe((response) => (this.resultados = response.data));
  }
}
