import {
  saveMessageActionType,
  MessageAction,
  deleteMessageActionType,
} from './messages.actions';
import { Message } from './models';
import uuid4 from 'uuid4';

const initialMessages: Message[] = [
  {
    id: uuid4(),
    firstName: 'David',
    lastName: 'Barreto',
    email: 'david.barreto@rangle.io',
    message: 'This is an message from David',
  },
  {
    id: uuid4(),
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@rangle.io',
    message: 'This is an message from Mr Doe',
  },
];

export function messagesReducer(
  currentState = initialMessages,
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
