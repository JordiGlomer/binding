import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.scss']
})
export class InterpolacionComponent implements OnInit {

user = {name: 'John', surname: 'Smith', address: '13 Pine Street'};

persona2:any;

  constructor() { }

  ngOnInit(): void {

  }
 duplicarTexto(texto:string){
 return texto+texto;
}
concatenarCadenas(cad1:string,cad2:string){
  return cad1+cad2;
}
}
