import { Action } from '@ngrx/store';
import { Message } from './models';

export const saveMessageActionType = '[Message] Save Message';
export const deleteMessageActionType = '[Message] Delete Message';

export class SaveMessageAction implements Action {
  readonly type = saveMessageActionType;
  constructor(public payload: { message: Message }) {}
}

export class DeleteMessageAction implements Action {
  readonly type = deleteMessageActionType;
  constructor(public payload: { id: string }) {}
}

export type MessageAction = SaveMessageAction | DeleteMessageAction;
