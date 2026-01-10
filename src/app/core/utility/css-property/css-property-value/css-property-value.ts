import {Component, input} from '@angular/core';

@Component({
  selector: 'prb-css-property-value',
  imports: [],
  templateUrl: './css-property-value.html',
  styleUrl: './css-property-value.scss'
})
export class CssPropertyValue {
  hexNumber = /#[\da-fA-F]{6}/;
  numberUnit = /[0-9]+(px|em|rem|%|vw|vh|vmin|vmax|deg|s|ms|rad|turn|fr)/;
  number = /[0-9]+/;
  percentage = /[0-9]+%/;
  stringValue = /"[^"]*"/;
  calcValue = /calc\((.*)([-+/*])(.*)\)/;
  value = input<string>('');

  isHexNumber(): boolean {
    return this.hexNumber.test(this.value());
  }

  isNumberUnit(): boolean {
    return this.numberUnit.test(this.value());
  }

  isNumber(): boolean {
    return this.number.test(this.value());
  }

  isPercentage(): boolean {
    return this.percentage.test(this.value());
  }

  isCalcValue(): boolean {
    return this.calcValue.test(this.value());
  }

  getHexNumber() {
    return this.value().replace(/[^0-9a-zA-Z]/g, '');
  }

  getNumber() {
    return this.value().replace(/[^0-9]/g, '');
  }

  getUnit() {
    return this.value().replace(/[0-9]/g, '');
  }

  getCalcFirstValue() {
    return this.value()
      .replace(/calc\((.*)([-+/*])(.*)\)/, '$1')
      .replace(/[^0-9]/g, '').trim();
  }

  getCalcFirstUnit() {
    return this.value()
      .replace(/calc\((.*)([-+/*])(.*)\)/, '$1')
      .replace(/[0-9]/g, '').trim();
  }

  getCalcOperator() {
    return this.value()
      .replace(/calc\((.*)([-+/*])(.*)\)/, '$2').trim();
  }

  getCalcSecondValue() {
    return this.value()
      .replace(/calc\((.*)([-+/*])(.*)\)/, '$3')
      .replace(/[^0-9]/g, '').trim();
  }

  getCalcSecondUnit() {
    return this.value()
      .replace(/calc\((.*)([-+/*])(.*)\)/, '$3')
      .replace(/[0-9]/g, '').trim();
  }
}
