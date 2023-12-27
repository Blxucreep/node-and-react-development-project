import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'td_angular';
  values: string = '';

  constructor(private router: Router) {
    console.log('AppComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('AppComponent.ngOnInit()');
  }

  ngOnDestroy(): void {
    console.log('AppComponent.ngOnDestroy()');
  }

  isHomePage(): boolean {
    return this.router.url === '/';
  }
}