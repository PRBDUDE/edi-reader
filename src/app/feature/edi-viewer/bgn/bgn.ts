import {Component} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {D8DatePipe} from '@pipes/d8-date-pipe';
import {Segment} from '../segment/segment';

@Component({
  selector: 'prb-bgn',
  imports: [
    ElementDescription,
    D8DatePipe
  ],
  templateUrl: './bgn.html',
  styleUrls: ['./bgn.scss', '../edi-viewer.scss']
})
export class Bgn extends Segment {

  constructor() {
    super();
  }

  override init() {
    super.init();
    this.valid = true;
  }
}
