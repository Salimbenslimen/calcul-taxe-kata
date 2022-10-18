import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrondiCinqCentSup',
})
export class ArrondiCinqCentSupPipe implements PipeTransform {
  transform(value: number | undefined): number {
    let result = 0;
    if (value !== undefined) {
      const x: number = (value * 100) % 5;
      if (x > 0) {
        result = (5 - x + value * 100) / 100;
      } else {
        result = value;
      }
    } else {
      result = 0;
    }

    return result;
  }
}
