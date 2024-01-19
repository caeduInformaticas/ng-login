import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/handle/auth.service';
import { EROUTER, RouterService } from 'src/app/handle/router.service';
import { IDATALOGO } from 'src/app/shared/logo/logo.component';
import { Store } from '@ngrx/store';
import { changeStoreAppData } from '../../store-app/store/store-app.actions';

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
        Validators.minLength(4),
        Validators.maxLength(60),
      ],
    ],
    ci: [
      '',
      [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(8),
        Validators.pattern(/^[0-9]+$/),
      ]
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
      [
        Validators.required,
        Validators.pattern(/^(true|false)$/i),
      ]
    ],
  });

  constructor(
    public formBuilder: FormBuilder,
    private sRouter: RouterService,
    private sStorage: AuthService,
    private store: Store<{ storeAppData: any }>
  ) {

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
    try {
      if (this.mForm.valid) {
        this.sStorage._storageUser(this.mForm.value);
        this.store.dispatch(changeStoreAppData(
          {
            data: {
              ...this.mForm.value,
            },
          }
        ));
        this.sRouter._navigate(EROUTER.WELCOME_PAGE)
      }
    } catch (error: any) {
      if (error?.messasge) {
        window.alert(error.message);
      }
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
    window.open('https://github.com/caeduInformaticas/ng-login', '_blank');
  };

  iDataLogo: IDATALOGO = {
    alt: 'Logo',
    src: 'https://png.pngtree.com/png-vector/20190810/ourmid/pngtree-app-development-arrows-div-mobile-abstract-flat-color-icon-te-png-image_1653523.jpg',
    width: 200,
    callback: this._callbackLogo
  };
}
