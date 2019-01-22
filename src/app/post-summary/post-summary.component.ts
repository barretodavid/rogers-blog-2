import { Component, Input } from '@angular/core';
import { Post } from '../store/models';

@Component({
  selector: 'app-post-summary',
  templateUrl: './post-summary.component.html',
  host: {
    class: 'db',
  },
})
export class PostSummaryComponent {
  @Input() post: Post;
}
