import {
  saveMessageActionType,
  MessageAction,
  deleteMessageActionType,
} from './messages.actions';
import { Message } from './models';

export function messagesReducer(
  currentState = [],
  action: MessageAction,
): Message[] {
  switch (action.type) {
    case saveMessageActionType:
      return [...currentState, action.payload.message];
    case deleteMessageActionType:
      return currentState.filter(message => message.id !== action.payload.id);
    default:
      return currentState;
  }
}
