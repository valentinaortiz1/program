import { Component, OnInit } from '@angular/core';
import { TarjetaInicio } from 'src/app/models/modelo';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public info: TarjetaInicio[];
  constructor(){
    this.info=[
      {
        titulo:"",
        descripcion:"",
        imagen:"https://media.ambito.com/p/87c93135add3d3c5570f1082f039b46b/adjuntos/239/imagenes/039/602/0039602800/julian-alvarez-aranajpg.jpg",
        alt:"",
      }
    ]
  }
}
