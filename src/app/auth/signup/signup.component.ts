import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  mclickSumbmit = false;
  mForm = this.formBuilder.group({
    fullname: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(60),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.email
      ],
    ],
    password: [
      '',
      Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(40),
        Validators.required
      ]),
    ],
    remember: [
      false,
      Validators.required
    ],
  });

  constructor(public formBuilder: FormBuilder) { 
    console.log('init sign up constructor');

  }

  ngOnInit(): void {
    console.log('init sign up');
    
  }
  submit() {
    console.log(this.mForm.value);
    if (this.mForm.valid) {
      this.f['name'].valid
    }
  }
  
  public get f(): {
    [key: string]: AbstractControl;
  } {
    return this.mForm.controls;
  }
  

}
