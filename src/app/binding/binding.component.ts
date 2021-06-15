import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})


export class BindingComponent implements OnInit {
 name!: string;
 surname!: string;
 address!: string;

   user = new BindingComponent();


  constructor() { }

  ngOnInit(): void {
  }

}
