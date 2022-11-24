import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent {

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      login: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      password: this.fb.control('', [Validators.required, Validators.minLength(8)]),
    })

    this.form.setValue({
      login: 'Lorem ipsum',
      password: 'Test password'
    })

    this.form.controls['login'].valueChanges.pipe(
      debounceTime(500),
    ).subscribe(val => {
      console.log(val);
    })
    }


}
