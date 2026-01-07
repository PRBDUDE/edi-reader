import {Component} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {D8DatePipe} from '@pipes/d8-date-pipe';
import {Segment} from '../segment/segment';

@Component({
  selector: 'prb-dtp',
  imports: [
    ElementDescription,
    D8DatePipe
  ],
  templateUrl: './dtp.html',
  styleUrls: ['./dtp.scss', '../edi-viewer.scss']
})
export class Dtp extends Segment {
  dtp01DateType = [
    {code: '001', description: 'cancel after date'},
    {code: '007', description: 'effective date'},
    {code: '011', description: 'ship date'},
    {code: '336', description: 'employment begin date'},
    {code: '346', description: 'plan issue date'},
    {code: '348', description: 'benefit start date'},
    {code: '349', description: 'benefit end date'},
  ]
  dtp02Format = [
    {code: 'D6', description: 'YYMMDD'},
    {code: 'D8', description: 'YYYYMMDD'},
    {code: 'DT', description: 'YYYYMMDDHHMM'},
  ]

  constructor() {
    super();
  }

  override init() {
    super.init();
    this.valid = true;
  }

  getDtpDateType(code: string) {
    return this.dtp01DateType.find(x => x.code === code);
  }

  getDtpFormat(code: string) {
    return this.dtp02Format.find(x => x.code === code);
  }
}
