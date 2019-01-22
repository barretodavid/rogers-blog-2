import { Action } from '@ngrx/store';
import { Message } from './models';

export const saveMessageActionType = '[Message] Save Message';

export class SaveMessageAction implements Action {
  readonly type = saveMessageActionType;
  constructor(public payload: Message) {}
}
