import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.scss'
})
export class PropertyCardComponent {
  Property: any ={
    "Id":1,
    "Type":"House",
    "Name":"Brila House",
    "Price":1200
  }
}
