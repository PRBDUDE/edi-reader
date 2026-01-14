import {Component} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {D8DatePipe} from '@pipes/d8-date-pipe';
import {Segment} from '../segment/segment';

@Component({
  selector: 'prb-dmg',
  imports: [
    ElementDescription,
    D8DatePipe
  ],
  templateUrl: './dmg.html',
  styleUrls: ['./dmg.scss', '../messy-edi-viewer.scss']
})
export class Dmg extends Segment {

  constructor() {
    super();
  }

  override init() {
    super.init();
    this.valid = true;
  }
}
