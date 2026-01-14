import {Component, signal} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {D8DatePipe} from '@pipes/d8-date-pipe';
import {Segment} from '../segment/segment';

@Component({
  selector: 'prb-gs',
  imports: [
    ElementDescription,
    D8DatePipe
  ],
  templateUrl: './gs.html',
  styleUrls: ['./gs.scss', '../messy-edi-viewer.scss']
})
export class Gs extends Segment {
  gsGroupControlNumber = signal<number>(0);

  constructor() {
    super();
  }

  override init() {
    super.init();
    this.gsGroupControlNumber.set(Number(this.getElement(6)));
    this.valid = true;
  }
}
