import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyCardComponent } from "./property-card/property-card.component";
import { PropertyListComponent } from "./property-list/property-list.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PropertyCardComponent, PropertyListComponent,NavBarComponent]
})
export class AppComponent {
  title = 'Social_Media';
}
