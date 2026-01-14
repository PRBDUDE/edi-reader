import {Component, input} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {Segment} from '../segment/segment';

@Component({
  selector: 'prb-se',
  imports: [
    ElementDescription
  ],
  templateUrl: './se.html',
  styleUrls: ['./se.scss', '../messy-edi-viewer.scss']
})
export class Se extends Segment {

  constructor() {
    super();
  }

  override init() {
    super.init();
    this.valid = true;
  }
}
