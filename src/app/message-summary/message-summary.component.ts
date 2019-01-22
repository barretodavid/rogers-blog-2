import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() delete = new EventEmitter<string>();

  getFullName(): string {
    return `${this.message.firstName} ${this.message.lastName}`;
  }

  onDeleteClick(): void {
    const id = this.message.id;
    this.delete.emit(id);
  }
}
