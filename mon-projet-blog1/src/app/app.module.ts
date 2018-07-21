import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostLisComponent } from './post-lis/post-lis.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PostLisComponent,
    PostListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
