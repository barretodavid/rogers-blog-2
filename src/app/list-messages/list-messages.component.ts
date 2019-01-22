import { Component, OnInit } from '@angular/core';
import { Store, createFeatureSelector, select } from '@ngrx/store';
import { State, Message } from '../store/models';
import { Observable } from 'rxjs';
import { DeleteMessageAction } from '../store/messages.actions';

const selectMessages = createFeatureSelector<State, Message[]>('messages');

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
})
export class ListMessagesComponent implements OnInit {
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
