import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.postForm = this.fb.group({ title: [''], content: [''] });
  }

  onSubmit() {
    console.log(this.postForm.value);
  }

  onReset() {
    this.postForm.reset();
  }
}
