import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorComponent2 } from './calculator2/calculator2.component';
import { CalculatorComponent3 } from './calculator3/calculator3.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttptestComponent } from './httptest/httptest.component';

@NgModule({
  declarations: [
    CalculatorComponent,
    CalculatorComponent2,
    CalculatorComponent3,
    HttptestComponent,
    
  ],
  imports: [BrowserModule,HttpClientModule, AppRoutingModule, FormsModule],

  providers: [],
  bootstrap: [CalculatorComponent3],
})
export class AppModule {}
