import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './calculator2.component.html',
  styleUrls: ['./calculator2.component.css'],
})
export class CalculatorComponent2 {
  inputValue1: number = 0;
  inputValue2: number = 0;
  result: number = 0;
  operator: string = '';
  value : string = ""
  numbers: string[] = [
    '1',
    '2',
    '3',
    '+',
    '4',
    '5',
    '6',
    '-',
    '7',
    '8',
    '9',
    'x',
    '0',
    'Del',
    ',',
    '/',
   ];

  onChange(event: any): void {
    if (!isNaN(event.target.value)) {
      this.inputValue1 = Number(event.target.value);
    } 
    else {
      this.inputValue1 = this.inputValue1;
    }
  }
  onClick(event: any): void {
    
    

    if (!isNaN(event.target.value)) {
      this.value += event.target.value;
      this.inputValue1 = Number(this.value)
    }
    else if (event.target.value == 'Del') {
     
      this.value = String(this.inputValue1).slice(0, String(this.inputValue1).length - 1);
      this.inputValue1 = Number(this.value)
    }
    else if (event.target.value== ","){
      this.value+= "."
      console.log(this.value);
      this.inputValue1 = Number(this.value)
    } else {
      this.operator = event.target.value;
      this.inputValue2 = this.inputValue1;
      this.inputValue1 = 0;
      this.value =""
    }
    console.log("iv1 " +this.inputValue1)
    console.log("iv2 " +this.inputValue2)
    console.log("rs " +this.result)

    console.log("vl " +this.value)
    console.log("op " +this.operator)
    console.log();
  }

  onSubmit(event: any): void {
    switch (this.operator) {
      case '+':
        this.result = this.inputValue2 + this.inputValue1;
        break;
      case '-':
        this.result = this.inputValue2 - this.inputValue1;
        break;
      case '*':
        this.result = this.inputValue2 * this.inputValue1;
        break;
      case '/':
        this.result = this.inputValue2 / this.inputValue1;
        break;
    }
    this.inputValue1 = this.result;
  }
}
