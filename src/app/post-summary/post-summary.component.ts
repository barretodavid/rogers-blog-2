import { Component, Input } from '@angular/core';
import { Post, State } from '../store/models';
import { DeletePostAction } from '../store/posts.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-post-summary',
  templateUrl: './post-summary.component.html',
  host: {
    class: 'db',
  },
})
export class PostSummaryComponent {
  @Input() post: Post;

  constructor(private store: Store<State>) {}

  onDeleteClick(): void {
    const id = this.post.id;
    const action = new DeletePostAction({ id });
    this.store.dispatch(action);
  }
}
