import { Component, Input } from '@angular/core';
import { Message } from '../store/models';

@Component({
  selector: 'app-message-summary',
  templateUrl: './message-summary.component.html',
  host: {
    class: 'db',
  },
})
export class MessageSummaryComponent {
  @Input() message: Message;

  getFullName(): string {
    return `${this.message.firstName} ${this.message.lastName}`;
  }
}
