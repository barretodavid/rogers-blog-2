import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { State } from './models';
import { postsReducer } from './posts.reducer';
import { messagesReducer } from './messages.reducer';
import { environment } from 'src/environments/environment';

export const reducers: ActionReducerMap<State> = {
  posts: postsReducer,
  messages: messagesReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];
