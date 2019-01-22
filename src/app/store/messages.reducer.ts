import { SaveMessageAction, saveMessageActionType } from './messages.actions';
import { Message } from './models';

export function messagesReducer(
  currentState = [],
  action: SaveMessageAction,
): Message[] {
  switch (action.type) {
    case saveMessageActionType:
      return [...currentState, action.payload];
    default:
      return currentState;
  }
}
