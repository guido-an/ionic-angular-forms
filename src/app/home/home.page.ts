import { Component } from '@angular/core'
import {
  Validators,
  NgForm,
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

/* TEMPLATE DRIVEN FORM */
/* export class HomePage {
  constructor() {}

  login(form: NgForm) {
    console.log(form, 'my form')
  }
} */

/* REACTIVE FORM */
export class HomePage {
  // new instance
  dataForm: FormGroup
  error: false

  // FormBuilder creates a new FormControl and FormGroup
  constructor(formBuilder: FormBuilder) {
    this.dataForm = formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    })
  }
  login(data) {
    console.log(data.value, 'form.value')
  }
}
