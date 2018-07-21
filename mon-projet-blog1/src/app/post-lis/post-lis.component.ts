import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-lis',
  templateUrl: './post-lis.component.html',
  styleUrls: ['./post-lis.component.scss']
})
export class PostLisComponent implements OnInit {
  cit1 = "La programmation est un art subtil et stimulant une fois les bases acquisent seul notre sera notre imagination";
  cit2 = "Un programme C est comme une danse rapide sur une piste de danse fraichement cirée, par des personnes tenant des rasoirs.";
  cit3 = "L'une des principales causes de la chute de l'Empire romain a été que, faute du zéro, ils n'avaient aucun moyen d'indiquer l'achèvement avec succès de leurs programmes C.";
  posts = [
    {
      title:"Mon premier post",
      content:this.cit1,
      loveIts:0,
      create_at:new Date()
    },
    {
      title:"Mon deuxième post",
      content:this.cit2,
      loveIts:0,
      create_at:new Date()
    },
    {
      title:"Encore un post",
      content:this.cit3,
      loveIts:0,
      create_at:new Date()
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
