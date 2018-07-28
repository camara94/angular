import {Subject} from 'rxjs';

export class AppareilService {

  appareilSubject = new Subject<any[]>();
  private appareils = [
    {
      id:1,
      name:"Machine à laver",
      status:"éteint"
    },
    {
      id:2,
      name:"Télévision",
      status:"allumé"
    },
    {
      id:3,
      name:"Ordinateur",
      status:"éteint"
    },
    {
      id:4,
      name:"Télévision",
      status:"allumé"
    }
  ];

  constructor(){}

  emitAppareils(){
    this.appareilSubject.next(this.appareils.slice());
  }

  getAppareilById(id:number){
    const appareil = this.appareils.find(
      (appareilObject)=>{
        return appareilObject.id === id;
      }
    );
    //emitAppareils();
    return appareil;
  }

  switchOnAll(){
    for (let appareil of this.appareils){
      appareil.status = "allumé";
    }
    this.emitAppareils();
  }
  switchOffAll(){
    for(let appareil of this.appareils){
      appareil.status = "éteint";
    }
    this.emitAppareils();
  }

  switchOn(index:number){
    this.appareils[index].status="allumé";
    this.emitAppareils();
  }

  switchOff(index:number){
    this.appareils[index].status = "éteint";
    this.emitAppareils();
  }

  addAppareil(name:string,status:string){
    const appareil = {
      id:0,
      name:'',
      status:''
    }
    appareil.name = name;
    appareil.status = status;
    appareil.id = this.appareils[(this.appareils.length-1)].id+1;
    this.appareils.push(appareil);
    this.emitAppareils();
  }


}
