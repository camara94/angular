import { Component,Input, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  onLove(){
    this.loveIts +=1;
  }

  onDontLove(){
    this.dontLoveIts +=1;
  }
}
