import { Component, OnInit } from '@angular/core';
import { TarjetaInicio } from 'src/app/models/modelo';
import { Jugador } from 'src/app/models/enzo.fernandez';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public info: Jugador[];
  constructor(){
    this.info=[
      {
        id: 1,
        titulo:"Juli",
        descripcion:"re fachero el pibe",
        image:"https://fotos.perfil.com/2022/05/25/trim/720/410/julian-alvarez-1362171.jpg",
        alt:"aaa",
      },
      {
        id:2,
        titulo: "Enzo",
        descripcion: "jugaba en river",
        image: "https://images.pagina12.com.ar/styles/focal_content_1200x1050/public/2023-03/709158-enzo-20fernandez.jpg?h=7fb5dd32&itok=kPC1d41p",
        alt: "aaaa",


      }
    ]
  }
}
