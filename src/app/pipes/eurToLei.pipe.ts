import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eurToLei',
})
export class EurToLeiPipe implements PipeTransform {
  transform(value: number | string) {
    if (typeof value === 'number') {
      return (value * 19.77).toFixed(2);
    }
    if (typeof value === 'string' && value === 'EUR') {
      return 'Lei';
    }
    return;
  }
}
