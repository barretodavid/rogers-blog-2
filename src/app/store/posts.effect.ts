import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { PostsService } from './posts.service';

@Injectable()
export class PostsEffect {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  // @Effect()
  // getAll$ = this.actions$;
}
