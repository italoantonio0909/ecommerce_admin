import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Post } from '../../entities/Post';
import { PostCreate } from '../../store/actions';
import { catchError, of } from 'rxjs';
import { AlertMessage } from '../../../../helpers/index';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent implements OnInit, OnDestroy {
  editor: Editor;

  validate: boolean = false;

  html: '<p>Hello World!</p>';

  constructor(
    private store: Store,
    private formBUilder: FormBuilder) {
  }

  ngOnInit() {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  isLoading: boolean = false;

  postCreateForm = this.formBUilder.group({
    title: new FormControl("", [Validators.required]),
    metaDescription: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    published: new FormControl(true, [Validators.required]),
  });

  onChange(event: any) {
    const value = event.target.value === "true" ? true : false
    this.postCreateForm.get("published").setValue(value);
  }

  async submit() {
    this.validate = true;

    if (this.postCreateForm.invalid) {
      return;
    }

    this.isLoading = true;
    // const data: Post = {
    //   email: this.postCreateForm.get('email').value,
    // }

    // this.store.dispatch(new PostCreate(data)).pipe(
    //   catchError(
    //     err => {
    //       this.isLoading = false;
    //       console.log({ err })
    //       return of('')
    //     })
    // ).subscribe(
    //   () => {
    //     this.isLoading = false;
    //     AlertMessage("Post created successfull");
    //   });
  }

  editorConfig = {
    editable: true,
    spellcheck: false,
    height: '70em',
    minHeight: '5rem',
    width: '100%',
    translate: 'no'
  };

}
