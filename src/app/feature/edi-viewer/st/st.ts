import {Component, input, OnChanges, OnInit} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {Segment} from '../segment/segment';

@Component({
  selector: 'prb-st',
  imports: [
    ElementDescription
  ],
  templateUrl: './st.html',
  styleUrls: ['./st.scss', '../edi-viewer.scss']
})
export class St extends Segment {

  constructor() {
    super();
  }

  override init() {
    super.init();
    this.valid = true;
  }
}
