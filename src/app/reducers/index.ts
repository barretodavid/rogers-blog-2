import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action,
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface Post {
  title: string;
  content: string;
}

export interface State {
  posts: Post[];
}

const savePostActionType = '[Post] Save Post';

export class SavePostAction implements Action {
  readonly type = savePostActionType;
  constructor(public payload: Post) {}
}

export function postsReducer(
  initialState = [],
  action: SavePostAction,
): Post[] {
  switch (action.type) {
    case savePostActionType: {
      return [...initialState, action.payload];
    }
    default: {
      return initialState;
    }
  }
}

export const reducers: ActionReducerMap<State> = {
  posts: postsReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
