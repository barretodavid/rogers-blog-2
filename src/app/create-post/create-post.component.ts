import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['Default Title'],
      content: ['Default Content'],
    });
  }

  onSubmit() {
    console.log(this.postForm.value);
  }

  onReset() {
    this.postForm.reset();
  }

}
