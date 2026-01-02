import {Component, input, OnInit, signal} from '@angular/core';

@Component({
  selector: 'prb-dtp',
  imports: [],
  templateUrl: './dtp.html',
  styleUrls: ['./dtp.scss','../edi-viewer.scss']
})
export class Dtp implements OnInit {
  data = input<String>('DTP*007*D8*20251101~');
  valid = false;
  elementDelimiter = signal('*');
  subElementDelimiter = signal(':');
  segmentDelimiter = signal('~');
  dtp: String[] | undefined;

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
