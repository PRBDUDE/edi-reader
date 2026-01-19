import {Component, input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {Segment} from '../segment/segment';

@Component({
  selector: 'prb-ge',
  imports: [
    ElementDescription
  ],
  templateUrl: './ge.html',
  styleUrls: ['./ge.scss', '../messy-edi-viewer.scss']
})
export class Ge extends Segment {
  geNumberOfTransactionSets = input(0);
  geGroupControlNumber = input(0);

  constructor() {
    super();
  }

  override init() {
    super.init();
    this.valid = (this.geGroupControlNumber() == Number(this.getElement(2))) &&
      (this.geNumberOfTransactionSets() == Number(this.getElement(1)));
  }
}
