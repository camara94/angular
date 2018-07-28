import { Component,Input, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() title:string;
  @Input() content:string;
  @Input() loveIts:number = 0;
  @Input() dontLoveIts:number = 0;
  @Input() create_at:object;
  @Input() i:number;
  @Input() id:number;
  posts:any[];
  constructor(private postService:PostService) { }

  ngOnInit() {

  }
  onLove(){
    this.postService.getPostById(this.id).loveIts++;
    this.loveIts = this.postService.getPostById(this.id).loveIts;
    this.postService.emitPosts();
  }

  onDontLove(){
    this.dontLoveIts++
  }

  onDelete(){
    this.postService.supprimerPost(this.i);
  }

}
