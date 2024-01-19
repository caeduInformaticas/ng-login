import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { storeAppReducer } from './store-app/store/store-app.reducer';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ storeAppData: storeAppReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
