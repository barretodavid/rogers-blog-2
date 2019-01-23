import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PostsService } from './posts.service';
import {
  GetAllPostsActionType,
  GetAllPostsAction,
  GetAllPostsSuccessAction,
  GetAllPostsErrorAction,
} from './posts.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class PostsEffect {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  @Effect()
  getAll$: Observable<GetAllPostsAction> = this.actions$.pipe(
    ofType(GetAllPostsActionType.Start),
    switchMap(() =>
      this.postsService.getAll().pipe(
        map(posts => new GetAllPostsSuccessAction({ posts })),
        catchError(() =>
          of(
            new GetAllPostsErrorAction({
              error: 'Failed to connect to backend',
            }),
          ),
        ),
      ),
    ),
  );
}
