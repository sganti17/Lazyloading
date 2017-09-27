import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
       <p>Home Components</p>
     <nav>
        <a routerLink="/tasks">Tasks</a>
        <a routerLink="/users">Users</a>
      </nav>
      <router-outlet></router-outlet>
    `
})

export class AppComponent {
}
