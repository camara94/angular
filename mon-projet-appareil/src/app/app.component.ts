import { Component,OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isAuth = false;
  appareils:any[];
  constructor(private appareilService:AppareilService){
    setTimeout(()=>{
      this.isAuth = true;
    },4000);
  }

  ngOnInit(){
    this.appareils = this.appareilService.appareils;
  }

  onSwitchOnAll(){
    this.appareilService.switchOnAll()
  }

  onSwitchOffAll(){
    this.appareilService.switchOffAll();
  }
}
