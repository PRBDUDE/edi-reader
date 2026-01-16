import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'd6Date'
})
export class D6DatePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    if (value.length === 6) {
      return `${value.slice(2, 4)}/${value.slice(4)}/20${value.slice(0, 2)}`;
    }
    return value;
  }

}
