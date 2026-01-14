import {Component, input} from '@angular/core';

@Component({
  selector: 'prb-element-description',
  imports: [],
  templateUrl: './element-description.html',
  styleUrls: ['./element-description.scss','../messy-edi-viewer.scss']
})
export class ElementDescription {
  element = input<string>();
  data = input<string>();
  description = input<string>();
}
