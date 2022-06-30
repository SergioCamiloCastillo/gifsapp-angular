import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  private apiKey: string = 'gImX2b1jM1O2RXEp2rQdgKCkHECDOLsV';
  public resultados: any = [];

  get historial() {
    return [...this._historial];
  }
  constructor(private http: HttpClient) {}
  buscarGifs(query: string) {
    query = query.toLocaleLowerCase();

    if (query && !this._historial.includes(query)) {
      this._historial.unshift(query);

      this._historial = this._historial.splice(0, 10);
    }
    this.http
      .get(
        `http://api.giphy.com/v1/gifs/search?api_key=gImX2b1jM1O2RXEp2rQdgKCkHECDOLsV&q=${query}&limit=10`
      )
      .subscribe((response: any) => (this.resultados = response.data));
  }
}
