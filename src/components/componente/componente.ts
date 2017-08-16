import { Component } from '@angular/core';

/**
 * Generated class for the ComponenteComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'componente',
  templateUrl: 'componente.html'
})
export class ComponenteComponent {

  text: string;

  constructor() {
    console.log('Hello ComponenteComponent Component');
    this.text = 'Hello World';
  }

}
