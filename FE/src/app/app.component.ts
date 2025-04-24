import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserLogged } from './core/utils/userLogged';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Dụng cụ y tế';
  public userLogged = new UserLogged();
  constructor(private route : Router){
    if(!this.userLogged.isLogged()){
      this.route.navigate(['/authentication/login']);
    }
  }
}
