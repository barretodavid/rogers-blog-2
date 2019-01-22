import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, Message } from '../store/models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
})
export class ListMessagesComponent implements OnInit {
  messages$: Observable<Message[]>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.messages$ = this.store.pipe(map(state => state.messages));
  }

  getFullName(message: Message): string {
    return `${message.firstName} ${message.lastName}`;
  }
}
