import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { MessageCreateComponent } from './message-create/message-create.component';
import { MessageListComponent } from './message-list/message-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostListComponent },
  { path: 'create-post', component: PostCreateComponent },
  { path: 'edit-post/:id', component: PostCreateComponent },
  { path: 'messages', component: MessageListComponent },
  { path: 'create-message', component: MessageCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
