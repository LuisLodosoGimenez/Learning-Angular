import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tablanro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tablanro.component.html',
  styleUrl: './tablanro.component.css'
})
export class TablanroComponent {
  nro=0;
  multiplicadores=0;
  tabla='';

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.nro = parseInt(parametros.get("nro")!);
      this.multiplicadores = parseInt(parametros.get("terminos")!);
      this.tabla = '';
      for (let x = 1; x <= parseInt(parametros.get("terminos")!); x++) {
        let t = x * this.nro;
        this.tabla += t + '-';
      }
    })
  }
}