import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { StyleDirectiveDirective } from './style-directive.directive';
import { CurrencyPipe } from './currency.pipe';
import { RxPlaygroundComponent } from './rx-playground/rx-playground.component';
import { TestFormComponent } from './test-form/test-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    StyleDirectiveDirective,
    CurrencyPipe,
    RxPlaygroundComponent,
    TestFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
