import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-dtp',
  imports: [],
  templateUrl: './dtp.html',
  styleUrls: ['./dtp.scss', '../edi-viewer.scss']
})
export class Dtp implements OnInit {
  data = input<string>('DTP*007*D8*20251101~');
  elementDelimiter = input<string>('*');
  subElementDelimiter = input<string>(':');
  segmentDelimiter = input<string>('~');
  valid = false;
  dtp: string[] | undefined;

  ngOnInit() {
    const segmentLength = this.data().length;
    this.dtp = this.data().substring(0, segmentLength).split(this.elementDelimiter());
    this.valid = true;
  }

  getDtpLength() {
    if (!this.dtp) return 0;
    return this.dtp.length;
  }

  getDtpElement(number: number) {
    return this.dtp?.[number];
  }

  getElementDelimiter() {
    return this.elementDelimiter();
  }
}
