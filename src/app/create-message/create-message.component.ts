import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Message, State } from '../store/models';
import { SaveMessageAction } from '../store/messages.actions';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateMessageComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<State>) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    const message: Message = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      message: this.message.value,
    };

    const action = new SaveMessageAction(message);
    this.store.dispatch(action);
  }

  onReset() {
    this.contactForm.reset();
  }

  get firstName() {
    return this.contactForm.get('firstName');
  }

  get lastName() {
    return this.contactForm.get('lastName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
