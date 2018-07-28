import { Component,Input, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-lis',
  templateUrl: './post-lis.component.html',
  styleUrls: ['./post-lis.component.scss']
})
export class PostLisComponent implements OnInit,OnDestroy{
  postSubscription: Subscription;
  @Input() i:number;
  @Input() id:number;
  posts:any[];
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (post:any[])=>{
        this.posts = post;
      }
    );
    this.postService.emitPosts();
  }


  onSave(){
    this.postService.savePosts();
  }

  onCharge(){
    this.postService.charger();
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }
}
