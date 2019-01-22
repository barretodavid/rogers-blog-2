import { Component, OnInit } from '@angular/core';
import { Post, State } from '../store/models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
})
export class ListPostsComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.posts$ = this.store.pipe(map(state => state.posts));
  }
}
