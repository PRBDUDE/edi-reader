import {Component} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {Segment} from '../segment/segment';

@Component({
  selector: 'prb-n1',
  imports: [
    ElementDescription
  ],
  templateUrl: './n1.html',
  styleUrls: ['./n1.scss', '../edi-viewer.scss']
})
export class N1 extends Segment {

  constructor() {
    super();
  }

  override init() {
    super.init();
    this.valid = true;
  }
}
