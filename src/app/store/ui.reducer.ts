import { UI } from './models';
import { AppAction } from './root.reducer';
import { GetAllPostsActionType } from './posts.actions';

const initialState: UI = {
  isLoading: false,
  error: '',
};

export function uiReducer(currentState = initialState, action: AppAction): UI {
  switch (action.type) {
    case GetAllPostsActionType.Start:
      return { ...currentState, isLoading: true };
    case GetAllPostsActionType.Success:
      return { ...currentState, isLoading: false };
    case GetAllPostsActionType.Error:
      return { ...currentState, isLoading: false, error: action.payload.error };
    default:
      return currentState;
  }
}
