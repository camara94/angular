import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;
  appareils:any[];
  appareilSubscription:Subscription;
  constructor(private appareilService:AppareilService){
    setTimeout(()=>{
      this.isAuth = true;
    },2000);
  }

  ngOnInit(){
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils:any[])=>{
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareils();
  }

  onSwitchOnAll(){
    this.appareilService.switchOnAll();
    this.appareilService.emitAppareils();
  }

  onSwitchOffAll(){
    this.appareilService.switchOffAll();
    this.appareilService.emitAppareils();
  }



}
