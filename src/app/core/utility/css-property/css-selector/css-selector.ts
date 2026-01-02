import {Component, input} from '@angular/core';

@Component({
  selector: 'prb-css-selector',
  imports: [],
  templateUrl: './css-selector.html',
  styleUrl: './css-selector.scss'
})
export class CssSelector {
  selectorRegex = /(.)(.*)/;
  selector = input<string>('');

  getSelector() {
    return this.selectorRegex.exec(this.selector())?.[2];
  }

  getSelectorPrefix() {
    return this.selectorRegex.exec(this.selector())?.[1];
  }
}
