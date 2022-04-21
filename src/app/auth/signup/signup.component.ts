import { Component, HostListener , OnInit } from '@angular/core';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { IDATALOGO } from 'src/app/shared/logo/logo.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  mScreenWidth = 400;
  mShowPromotion = true;
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

  }

  ngOnInit(): void {
    this.mScreenWidth = window.innerWidth;
    this._initialize();
  }
  private _initialize() {
    this._width();
  }
  private _width() {
    if (this.mScreenWidth <= 767) {
      this.mShowPromotion = false;
    } else {
      this.mShowPromotion = true;
    }
  }
  submit() {
    this.mclickSumbmit = true;
    if (this.mForm.valid) {
      console.log('!! Success login form');
    }
  }
  
  public get f(): {
    [key: string]: AbstractControl;
  } {
    return this.mForm.controls;
  }
  
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.mScreenWidth = window.innerWidth;
    this._width();
  }

  private _callbackLogo = () => {
    window.open('https://eldeber.com.bo', '_blank');
  };

  iDataLogo: IDATALOGO = {
    alt: 'Logo',
    src: 'https://png.pngtree.com/png-vector/20190810/ourmid/pngtree-app-development-arrows-div-mobile-abstract-flat-color-icon-te-png-image_1653523.jpg',
    width: 200,
    callback: this._callbackLogo
  };
}
