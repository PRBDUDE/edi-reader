import {Component, input, OnChanges, OnInit} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {Segment} from '../segment/segment';

@Component({
  selector: 'prb-nm1',
  imports: [
    ElementDescription
  ],
  templateUrl: './nm1.html',
  styleUrls: ['./nm1.scss', '../edi-viewer.scss']
})
export class Nm1 extends Segment {

  constructor() {
    super();
  }

  override init() {
    super.init();
    this.valid = true;
  }
}
