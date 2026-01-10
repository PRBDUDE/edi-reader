import {Component, input} from '@angular/core';
import {CssProperty} from "./model/css-property";
import {CssPropertyName} from "@utility/css-property-name";
import {CssPropertyValue} from "@utility/css-property-value";
import {CssPropertyValueArrayComponent} from "@utility/css-property-value-array.component";
import {CssSelector} from "@utility/css-selector";
import {Indentation} from "@utility/indentation";

@Component({
  selector: 'prb-css-rule',
  imports: [
    CssPropertyName,
    CssPropertyValue,
    CssPropertyValueArrayComponent,
    CssSelector
  ],
  templateUrl: './css-rule.html',
  styleUrl: './css-rule.scss'
})
export class CssRule {
  level = input<number>(0);
  selectors = input<string[]>([]);
  properties = input<CssProperty[]>([]);

  getIndentation(extra = 0) {
    return Indentation.get(this.level(), extra);
  }
}
