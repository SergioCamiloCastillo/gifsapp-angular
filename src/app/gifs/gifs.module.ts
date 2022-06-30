import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from '../components/gifs/gifs-page/gifs-page.component';
import { BusquedaComponent } from '../components/gifs/busqueda/busqueda.component';
import { ResultadosComponent } from '../components/gifs/resultados/resultados.component';

@NgModule({
  declarations: [GifsPageComponent, BusquedaComponent, ResultadosComponent],
  exports: [GifsPageComponent, BusquedaComponent],
  imports: [CommonModule],
})
export class GifsModule {}
