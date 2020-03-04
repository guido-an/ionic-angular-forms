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

/* Template Driven Form */
/* export class HomePage {
  constructor() {}

  login(form: NgForm) {
    console.log(form, 'my form')
  }
} */
export class HomePage {
  // new instance
  dataForm: FormGroup

  // creates a new FormControl and FormGroup
  constructor(formBuilder: FormBuilder) {
    this.dataForm = formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      password: ''
    })
  }
  login(data) {
    console.log(data.value, 'form.value')
  }
}
