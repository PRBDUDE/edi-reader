import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'd8Date'
})
export class D8DatePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    if (value.length === 8) {
      return `${value.slice(4, 6)}/${value.slice(6)}/${value.slice(0, 4)}`;
    }
    return value;
  }
}
