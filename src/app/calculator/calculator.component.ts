import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  a: number = 0;
  b: number = 0;
  operator: string = '+';
  result: number = 0;
  selectedInput: string = '';
  value : string = ''

  onSelect(event: any) {
    this.value=""
    this.selectedInput = event.target.id;
    console.log(this.selectedInput)
  }
  onChange1(event: any): void {   
    if ( isNaN(event.target.value)) {
      this.a = Number(event.target.value);
    }
  }
  onChange2(event: any): void {
    if ( isNaN(event.target.value)) {
      this.b = Number(event.target.value);
    }
  }
  setOperator(event: any): void {
    
    this.operator = event.target.value;
  }
  onClickNumber(event: any): void {
    

    if (typeof Number(event.target.value) == 'number') {
      this.selectedInput == 'input1'
        ? this.a = Number(this.value += (event.target.value))
        : this.b = Number(this.value += (event.target.value));
    }
  }

  onSubmit(event: any): void {
    switch (this.operator) {
      case '+':
        this.result = Number(this.a + this.b);
        break;
      case '-':
        this.result = Number(this.a - this.b);
        break;
      case '*':
        this.result = Number(this.a * this.b);
        break;
      case '/':
        this.result = Number(this.a / this.b);
        break;
      
    }
    console.log(this.result);
  }
  delete(event:any){
    this.selectedInput == 'input1'
        ? this.a = 0
        : this.b = 0;
  }
}
