import {Component, input, OnChanges, OnInit, signal} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {Segment} from '../segment/segment';

@Component({
  selector: 'prb-isa',
  imports: [
    ElementDescription
  ],
  templateUrl: './isa.html',
  styleUrls: ['./isa.scss', '../edi-viewer.scss']
})
export class Isa extends Segment {
  isaInterchangeControlNumber = signal(0);

  constructor() {
    super();
  }

  override init() {
    super.init();
    this.isaInterchangeControlNumber.set(Number(this.getElement(13)));
    this.valid = this.data().length === 104;
  }
}
