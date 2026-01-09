import {Component, input, OnChanges, OnInit} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {Segment} from '../segment/segment';

@Component({
  selector: 'prb-iea',
  imports: [
    ElementDescription
  ],
  templateUrl: './iea.html',
  styleUrls: ['./iea.scss', '../edi-viewer.scss']
})
export class Iea extends Segment {
  ieaInterchangeControlNumber = input<number>(0);

  constructor() {
    super();
  }

  override init() {
    super.init();
    this.valid = Number(this.getElement(2)) == this.ieaInterchangeControlNumber();
  }
}
