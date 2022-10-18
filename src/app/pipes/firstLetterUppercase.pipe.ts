import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUppercase',
})
export class FirstLetterUppercasePipe implements PipeTransform {
  transform(value: string) {
    return `${value[0].toUpperCase()}${value.slice(-value.length + 1)}`;
  }
}
