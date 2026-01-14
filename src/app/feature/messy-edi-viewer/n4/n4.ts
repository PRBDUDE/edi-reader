import {Component, input, OnChanges, OnInit} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {Segment} from '../segment/segment';

@Component({
  selector: 'prb-n4',
  imports: [
    ElementDescription
  ],
  templateUrl: './n4.html',
  styleUrls: ['./n4.scss', '../messy-edi-viewer.scss']
})
export class N4 extends Segment {

  constructor() {
    super();
  }

  override init() {
    super.init();
    this.valid = true;
  }
}
