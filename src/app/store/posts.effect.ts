import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PostsService } from './posts.service';
import {
  GetAllPostsActionType,
  GetAllPostsAction,
  GetAllPostsSuccessAction,
} from './posts.actions';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class PostsEffect {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  @Effect()
  getAll$: Observable<GetAllPostsAction> = this.actions$.pipe(
    ofType(GetAllPostsActionType.Start),
    switchMap(() =>
      this.postsService
        .getAll()
        .pipe(map(posts => new GetAllPostsSuccessAction({ posts }))),
    ),
  );
}
