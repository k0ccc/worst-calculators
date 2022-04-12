import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

enum Symbols {
  Plus,
  Minus,
  Mult,
  Devision,
  NotUsed
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent implements OnInit {
  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}

  @Input() equation: string = '';

  resultNumber: number = 0;
  lastUsedSymbol:Symbols = 4

  result() {
    let temp: number = 0;
    if (this.lastUsedSymbol === 0) {
        temp = this.resultNumber + parseInt(this.equation);

    } else if (this.lastUsedSymbol === 1) {
        temp = this.resultNumber - parseInt(this.equation);

    } else if (this.lastUsedSymbol === 2) {
        temp = this.resultNumber * parseInt(this.equation);

    } else if (this.lastUsedSymbol === 3) {
        temp = this.resultNumber / parseInt(this.equation);

    }else if (this.lastUsedSymbol === 4) {
      this.equation = this.resultNumber.toString();
    }
    this.equation = temp.toString();
  }
  reset(){
    this.equation = '';
    this.resultNumber = 0;
    this.lastUsedSymbol = 4;

  }
  one() {
    this.equation += '1';
  }
  two() {
    this.equation += '2';
  }
  three() {
    this.equation += '3';
  }
  four() {
    this.equation += '4';
  }
  five() {
    this.equation += '5';
  }
  six() {
    this.equation += '6';
  }
  seven() {
    this.equation += '7';
  }
  eight() {
    this.equation += '8';
  }
  nine() {
    this.equation += '9';
  }
  zero() {
    this.equation += '0';
  }
  plus() {
    this.resultNumber += parseInt(this.equation);
    this.lastUsedSymbol = Symbols.Plus
    this.equation = '';
  }
  minus() {
    this.resultNumber += parseInt(this.equation);
    this.lastUsedSymbol = Symbols.Minus;
    this.equation = '';
  }
  mult() {
    this.resultNumber += parseInt(this.equation);
    this.lastUsedSymbol = Symbols.Mult;
    this.equation = '';
  }
  devision() {
    this.resultNumber += parseInt(this.equation);
    this.lastUsedSymbol = Symbols.Devision;
    this.equation = '';
  }
}
