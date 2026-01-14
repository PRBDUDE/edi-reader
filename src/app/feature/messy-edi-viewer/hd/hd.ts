import {Component, input} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {Segment} from '../segment/segment';

@Component({
  selector: 'prb-hd',
  imports: [
    ElementDescription
  ],
  templateUrl: './hd.html',
  styleUrls: ['./hd.scss', '../messy-edi-viewer.scss']
})
export class Hd extends Segment {

  constructor() {
    super();
  }

  override init() {
    super.init();
    this.valid = true;
  }
}
