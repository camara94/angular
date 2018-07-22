import { Component,Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName:string;
  @Input() appareilStatus:string;
  @Input() indice:number;
  constructor(private appareilService:AppareilService) {}

  getColor(){
    if(this.appareilStatus==='allumé'){
      return 'green';
    }
    else if(this.appareilStatus === 'éteint'){
      return 'red';
    }
  }
  ngOnInit() {
  }
  onSwitchOn(){
    this.appareilService.switchOn(this.indice);
  }

  onSwitchOff(){
    this.appareilService.switchOff(this.indice);
  }
}
