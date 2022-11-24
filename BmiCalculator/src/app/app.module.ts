import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorResultComponent } from './calculator-result/calculator-result.component';
import { CalculatorHistoryComponent } from './calculator-history/calculator-history.component';
import { BmiPipe } from './bmi.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorResultComponent,
    CalculatorHistoryComponent,
    BmiPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
