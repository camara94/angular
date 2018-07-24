export class AppareilService {
  appareils = [
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

  getAppareilById(id:number){
    const appareil = this.appareils.find(
      (appareilObject)=>{
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  switchOnAll(){
    for (let appareil of this.appareils){
      appareil.status = "allumé";
    }
  }
  switchOffAll(){
    for(let appareil of this.appareils){
      appareil.status = "éteint";
    }
  }

  switchOn(index:number){
    this.appareils[index].status="allumé";
  }

  switchOff(index:number){
    this.appareils[index].status = "éteint";
  }
}
