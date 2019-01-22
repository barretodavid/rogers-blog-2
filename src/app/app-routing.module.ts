import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateMessageComponent } from './create-message/create-message.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: ListPostsComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'edit-post/:id', component: CreatePostComponent },
  { path: 'messages', component: ListMessagesComponent },
  { path: 'create-message', component: CreateMessageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
