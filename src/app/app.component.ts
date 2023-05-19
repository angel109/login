import { Component } from '@angular/core';
import { AutentifacionService } from './shared/servicios/autentifacion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';

  constructor(private loginPrd:AutentifacionService){

  }

  public visualizarMenu():boolean{
    return this.loginPrd.habilitarlogeo();
  }
  
  }

  

