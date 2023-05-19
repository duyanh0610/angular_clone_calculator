import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './calculator3.component.html',
  styleUrls: ['./calculator3.component.css'],
})
export class CalculatorComponent3 {
  constructor() {
  }
  inputValue: string = '';
  result: number = 0;
  value: string = '';
  temp: string = '';
  operator: string = '';
  keyboards: string[] = [
    '%',
    'CE',
    'C',
    'Del',
    '1/x',
    'x²',
    '√()',
    '/',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '+/-',
    '0',
    '.',
  ];
  math: string[] = ['+', '-', '*', '/'];
  onChange(event: any): void {
    let key: string = event.target.value;
    let button: string = event.key;
    if(!isNaN(Number(key))){ //la num
      this.inputValue = key;
    }
    else if (this.math.includes(key.charAt(key.length-1))){  // la operator
      if(this.math.includes(this.value.charAt(this.value.length-1))){
        this.value = this.value.slice(0,this.value.length-1) + this.inputValue.charAt(this.inputValue.length-1);
      } else {
        this.value += key;
      }
        key ='';
        this.inputValue ='';
    }

    else if (key.charAt(key.length-1) == '='){  // la =
      if(this.value != ''){
        // if(this.math.includes(this.value.charAt(this.value.length-1))){
        //   this.inputValue = '';
        // } else (!isNaN){
          this.value += this.inputValue.slice(0,this.inputValue.length-1);
          this.result = eval(this.value);
          this.value = String(this.result);
          this.inputValue ='';
        // }

      }
    }

    else { // ki tu khac
      // event.preventDefault();
      this.inputValue = '';
    }
  }
  onClick(event: any): void {
    switch (event.target.value) {
      case '+':
      case '-':
      case '/':
        if (this.inputValue != '') {
          this.value += this.inputValue;
        }
        if (this.value == '') {
          this.value = this.inputValue + event.target.value;
          this.inputValue = '';
          this.temp = '';
        } else {
          if (!isNaN(Number(this.value.charAt(this.value.length - 1)))) {
            this.value += event.target.value;
            this.inputValue = '';
            this.temp = '';
            // break;
          } else {
            this.value =
              this.value.slice(0, this.value.length - 1) + event.target.value;
            this.inputValue = '';
            this.temp = '';
          }
        }

        break;
      case 'x':
        if (this.inputValue != '') {
          this.value += this.inputValue;
        }
        if (this.value == '') {
          this.value = this.inputValue + '*';
          this.inputValue = '';
          this.temp = '';
        } else {
          if (!isNaN(Number(this.value.charAt(this.value.length - 1)))) {
            this.value += '*';
            this.inputValue = '';
            this.temp = '';
            // break;
          } else {
            this.value = this.value.slice(0, this.value.length - 1) + '*';
            this.inputValue = '';
            this.temp = '';
          }
        }

        break;
      case '%':
        if (this.inputValue != '') {
          if (this.value != '') {
          }
          if (this.inputValue != '') {
            // this.value += String(Number(this.inputValue) / 100);
            this.temp = '';
            this.inputValue = String((Number(this.inputValue) / 100));
          }
        }
        break;
      case '1/x':
        if (this.inputValue != '') {
          // this.value += String(1 / Number(this.inputValue));
          this.temp = '';
          this.inputValue = String(1 / Number(this.inputValue));
        }
        break;
      case 'x²':
        if (this.inputValue != '') {
          this.temp = '';
          this.inputValue = String(Math.pow(Number(this.inputValue), 2));
        }
        break;
      case '√()':
        if (this.inputValue != '') {
          // this.value += String(Math.sqrt(Number(this.inputValue)));
          this.temp = '';
          this.inputValue = String(Math.sqrt(Number(this.inputValue)));
        }
        break;
      case '+/-':
        if (Number(this.inputValue) < 0) {
          this.inputValue = this.inputValue.replace('-', '');
        } else {
          this.inputValue = ' ' + String(Number(this.inputValue) * -1);
        }
        break;
      case 'Del':
        this.temp = String(this.inputValue).slice(
          0,
          String(this.inputValue).length - 1
        );
        this.inputValue = this.temp;
        break;
      case 'CE':
        this.temp = '';
        this.inputValue = '';
        break;
      case 'C':
        this.value = '';
        this.inputValue = '';
        this.temp = '';
        break;
      case '.':
        if (!this.inputValue.includes('.')) {
          this.temp += '.';

          this.inputValue = this.temp;
        }
        break;
      default:
        if (
          this.value != '' &&
          !isNaN(Number(this.value.charAt(this.value.length - 1)))
        ) {
          this.value = '';
        } else {
        }
        this.temp += event.target.value;
        this.inputValue = this.temp;
        break;
    }
  }
  onSubmit(event: any): void {
    if(this.value != ''  ){
      if(this.inputValue!=''){
        this.value += this.inputValue;
        this.result = eval(this.value);
        this.value = String(this.result);
        this.inputValue = '';
        this.temp = '';
      }
    } else {
      if(this.inputValue != ''){
        this.value += this.inputValue;
        this.inputValue  ='';
        this.temp = '';
      }
    }
  }
}
