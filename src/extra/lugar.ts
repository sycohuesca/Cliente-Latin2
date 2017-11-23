import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the BuscarPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
    name: 'lugar',
})
export class LugarPipe implements PipeTransform {
    /**
     * Takes a value and makes it lowercase.
     */
    transform(items: any[], value: string): any[] {
        if (value && value.trim() != '') {
            items = items.filter((item) => {
                return (item.direccion.toLowerCase().indexOf(value.toLowerCase()) > -1);
            })
        }
        return items;
    }
}
