import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() delete = new EventEmitter<string>();

  onDeleteClick(): void {
    const id = this.post.id;
    this.delete.emit(id);
  }
}
