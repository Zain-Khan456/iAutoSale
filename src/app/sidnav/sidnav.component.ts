import { Component } from '@angular/core';

@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.css'],
})
export class SidnavComponent {
  currentRoute: string = ''; // Variable to track the current active route

  setCurrentRoute(route: string) {
    this.currentRoute = route;
  }
}
