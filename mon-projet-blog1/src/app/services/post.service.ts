import {Subject} from 'rxjs';
import {PostModel} from '../../model/post.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable()
export class PostService {
  public postSubject = new Subject<any[]>();
  private cit1 = "La programmation est un art subtil et stimulant une fois les bases acquisent seul notre sera notre imagination";
  private cit2 = "Un programme C est comme une danse rapide sur une piste de danse fraichement cirée, par des personnes tenant des rasoirs.";
  private cit3 = "L'une des principales causes de la chute de l'Empire romain a été que, faute du zéro, ils n'avaient aucun moyen d'indiquer l'achèvement avec succès de leurs programmes C.";
  private posts = [
    /*{
      id:0,
      title:"Mon premier post",
      content:this.cit1,
      loveIts:0,
      create_at:new Date()
    },
    {
      id:1,
      title:"Mon deuxième post",
      content:this.cit2,
      loveIts:0,
      create_at:new Date()
    },
    {
      id:2,
      title:"Encore un post",
      content:this.cit3,
      loveIts:0,
      create_at:new Date()
    }*/
  ];
  constructor(private httpClient:HttpClient){}
  emitPosts(){
    this.postSubject.next(this.posts.slice());
  }

  getPostById(id:number){
    let post = this.posts.find(
      (postObject)=>{
        if(postObject.id === id){
          return true;
        }
      }
    );
    return post;
  }
   addlove(id:number){
    this.getPostById(id).loveIts++;
   }
  supprimerPost(id:number){
    delete this.posts[id];
    this.posts.splice(id,1);
    this.emitPosts();
  }
  addPost(post:PostModel){
    post.id = this.posts.length;
    this.posts.push(post);
    this.emitPosts();
  }

  savePosts(){
    this.httpClient.put('https://ybalservice.firebaseio.com/posts.json',this.posts).subscribe(
      ()=>{
        console.log("Enregistrement des données .....");
      },(error)=>{
        console.log("Erreur d'enregistrement "+ error);
      },()=>{
        console.log("Les données sont bien enregistrés!");
      }
    );
    this.emitPosts();
  }


  charger(){
    this.httpClient.get<any[]>('https://ybalservice.firebaseio.com/posts.json')
      .subscribe(
        (response)=>{
          this.posts = response;
        },
        (error)=>{
          console.log("Erreur " + error);
        }
      );
    this.emitPosts();
  }

}
