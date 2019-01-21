import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    console.log(this.postForm.value);
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
