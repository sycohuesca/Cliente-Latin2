import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ObjectPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'object',
})
export class ObjectPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any) {
    let keys = [];
    for (let key in value) {
      keys.push(value[key]);
    }
    keys = keys.sort((n1, n2) => {
      if (n1.nombre > n2.nombre) {
        return 1;
      }

      if (n1.nombre < n2.nombre) {
        return -1;
      }

      return 0;
    });
    return keys;
  }
}
