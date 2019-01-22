import { Component, OnInit, HostBinding } from '@angular/core';
import { Post, State } from '../store/models';
import { Store, createFeatureSelector, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeletePostAction } from '../store/posts.actions';

const selectPosts = createFeatureSelector<State, Post[]>('posts');

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
})
export class ListPostsComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.posts$ = this.store.pipe(select(selectPosts));
  }

  onDelete(id: string): void {
    const action = new DeletePostAction({ id });
    this.store.dispatch(action);
  }
}
