import { Action } from '@ngrx/store';
import { Post } from './models';

export const savePostActionType = '[Post] Save Post';

export class SavePostAction implements Action {
  readonly type = savePostActionType;
  constructor(public payload: Post) {}
}
