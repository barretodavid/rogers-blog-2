import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import uuid4 from 'uuid4';

import { Post, State } from '../store/models';
import { SavePostAction } from '../store/posts.actions';

@Component({
  templateUrl: './post-create.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCreateComponent implements OnInit {
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<State>) {}

  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    const post: Post = {
      id: uuid4(),
      title: this.title.value,
      content: this.content.value,
    };

    const action = new SavePostAction({ post });
    this.store.dispatch(action);
  }

  onReset() {
    this.postForm.reset();
  }

  get title() {
    return this.postForm.get('title');
  }

  get content() {
    return this.postForm.get('content');
  }
}
