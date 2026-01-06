import {Component, input, OnChanges, OnInit} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {D8DatePipe} from '@pipes/d8-date-pipe';

@Component({
  selector: 'prb-dtp',
  imports: [
    ElementDescription,
    D8DatePipe
  ],
  templateUrl: './dtp.html',
  styleUrls: ['./dtp.scss', '../edi-viewer.scss']
})
export class Dtp implements OnInit, OnChanges {
  dtpData = input<string>('DTP*007*D8*20251101~');
  dtpElementDelimiter = input<string>('*');
  dtpSubElementDelimiter = input<string>(':');
  dtpSegmentDelimiter = input<string>('~');
  dtpValid = false;
  dtp: string[] | undefined;
  dtp01DateType = [
    { code: '001', description: 'cancel after date' },
    { code: '007', description: 'effective date' },
    { code: '011', description: 'ship date' },
    { code: '336', description: 'employment begin date' },
    { code: '346', description: 'plan issue date' },
    { code: '348', description: 'benefit start date' },
    { code: '349', description: 'benefit end date' },
  ]
  dtp02Format = [
    { code: 'D6', description: 'YYMMDD' },
    { code: 'D8', description: 'YYYYMMDD' },
    { code: 'DT', description: 'YYYYMMDDHHMM' },
  ]

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    if (this.dtpData()) {
      this.init();
    }
  }

  private init() {
    const dtpSegmentLength = this.dtpData().length;
    this.dtp = this.dtpData().substring(0, dtpSegmentLength).split(this.dtpElementDelimiter());
    this.dtpValid = true;
  }

  getDtpLength() {
    if (!this.dtp) return 0;
    return this.dtp.length;
  }

  getDtpElementDelimiter() {
    return this.dtpElementDelimiter();
  }

  getDtpElement(index: number) {
    return this.dtp![index];
  }

  getDtpDateType(code: string) {
    return this.dtp01DateType.find(x => x.code === code);
  }

  getDtpFormat(code: string) {
    return this.dtp02Format.find(x => x.code === code);
  }
}
