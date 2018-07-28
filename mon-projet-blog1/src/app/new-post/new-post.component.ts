import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostModel} from '../../model/post.model';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  postForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private postService:PostService,private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      content:['',Validators.required],
      title:['',Validators.required],
      id:0,
      loveIt:0,
      create_at:new Date()
    });
  }

  onSubmit(){
    const postS = this.postForm.value;
    const newPost = new PostModel(
      postS['title'],
      postS['content'],
      postS['id'],
      postS['loveIt'],
      postS['create_at']
    );
    this.postService.addPost(newPost);
    this.router.navigate(['/path','posts']);
  }
}
