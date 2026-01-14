import {Component} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {D8DatePipe} from '@pipes/d8-date-pipe';
import {Segment} from '../segment/segment';
import {getDtpDateType, getDtp02Format} from '@edi/code-descriptions/dtp';

@Component({
  selector: 'prb-dtp',
  imports: [
    ElementDescription,
    D8DatePipe
  ],
  templateUrl: './dtp.html',
  styleUrls: ['./dtp.scss', '../messy-edi-viewer.scss']
})
export class Dtp extends Segment {
  constructor() {
    super();
  }

  override init() {
    super.init();
    this.valid = true;
  }

  protected readonly getDtp01DateType = getDtpDateType;
  protected readonly getDtp02Format = getDtp02Format;
}
