import {Component, input} from '@angular/core';

@Component({
    selector: 'prb-css-property-name',
    imports: [],
    templateUrl: './css-property-name.html',
    styleUrl: './css-property-name.scss'
})
export class CssPropertyName {
  property = input<string>('');
}
