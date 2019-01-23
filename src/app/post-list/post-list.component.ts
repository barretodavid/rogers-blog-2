import { Component, OnInit, HostBinding } from '@angular/core';
import { Post, State } from '../store/models';
import { Store, createFeatureSelector, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  DeletePostAction,
  GetAllPostsStartAction,
} from '../store/posts.actions';

const selectPosts = createFeatureSelector<State, Post[]>('posts');

@Component({
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.posts$ = this.store.pipe(select(selectPosts));
    const action = new GetAllPostsStartAction();
    this.store.dispatch(action);
  }

  onDelete(id: string): void {
    const action = new DeletePostAction({ id });
    this.store.dispatch(action);
  }
}
