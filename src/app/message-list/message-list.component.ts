import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, Message } from '../store/models';
import { Observable } from 'rxjs';
import { DeleteMessageAction } from '../store/messages.actions';
import { selectMessages } from '../store/selectors';

@Component({
  templateUrl: './message-list.component.html',
})
export class MessageListComponent implements OnInit {
  messages$: Observable<Message[]>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.messages$ = this.store.pipe(select(selectMessages));
  }

  onDelete(id: string): void {
    const action = new DeleteMessageAction({ id });
    this.store.dispatch(action);
  }
}
