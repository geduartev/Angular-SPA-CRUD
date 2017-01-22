import { Component } from '@angular/core';

import { HeroesComponent } from './heroes/heroes.component'
import { HeroComponent } from './heroes/hero.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'An Angular 2 Force Awakens!';
}
