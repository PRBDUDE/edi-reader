import {Component} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {Segment} from '../segment/segment';

@Component({
  selector: 'prb-n3',
  imports: [
    ElementDescription
  ],
  templateUrl: './n3.html',
  styleUrls: ['./n3.scss', '../messy-edi-viewer.scss']
})
export class N3 extends Segment {

  constructor() {
    super();
  }

  override init() {
    super.init();
    this.valid = true;
  }
}
