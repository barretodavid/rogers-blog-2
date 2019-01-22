import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { State } from './models';
import { postsReducer } from './posts.reducer';
import { messagesReducer } from './messages.reducer';
import { environment } from 'src/environments/environment';

export const reducers: ActionReducerMap<State> = {
  posts: postsReducer,
  messages: messagesReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
