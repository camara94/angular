import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostLisComponent } from './post-lis/post-lis.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {PostService} from './services/post.service';
import { NewPostComponent } from './new-post/new-post.component';
import { RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

const appRoutes:Routes =[
  {path:'path/posts',component:PostLisComponent},
  {path:'',component:PostLisComponent},
  {path:'new',component:NewPostComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostLisComponent,
    PostListItemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
