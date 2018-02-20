import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="wrapper animated fadeIn">
        <app-header></app-header>      
        <router-outlet></router-outlet>
        <app-footer></app-footer>
</div>

 
  `,
  styles: []
})
export class AppComponent {

}
