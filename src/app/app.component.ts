import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavLink } from './models/links.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  navLinks: Array<NavLink> = [
    { label: 'template driven form', path: '/pages/template-driven-form' },
    { label: 'First', path: '/firstday' },
    { label: 'Second', path: '/second' },
    { label: 'Pages', path: '/pages' },
    { label: 'child1', path: '/pages/child1' },
    { label: 'child2', path: '/pages/child2' },
  ]

  title = true;

  toggle() {
    this.title = !this.title;
  }


}