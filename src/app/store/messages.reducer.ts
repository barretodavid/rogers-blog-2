import { SaveMessageAction, saveMessageActionType } from './messages.actions';
import { Message } from './models';

const initialMessages: Message[] = [
  {
    firstName: 'David',
    lastName: 'Barreto',
    email: 'david.barreto@rangle.io',
    message: 'This is an message from David',
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@rangle.io',
    message: 'This is an message from Mr Doe',
  },
];

export function messagesReducer(
  currentState = initialMessages,
  action: SaveMessageAction,
): Message[] {
  switch (action.type) {
    case saveMessageActionType:
      return [...currentState, action.payload];
    default:
      return currentState;
  }
}
