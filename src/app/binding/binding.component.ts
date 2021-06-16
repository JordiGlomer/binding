import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})


export class BindingComponent implements OnInit {

  name:string;
  surname!: string;
  address!: string;

  user: Object = {
  name: 'John',
  surname: 'Smith',
  address: '13 Pine Street'
}





  constructor() { }

  ngOnInit(): void {
  }

}
