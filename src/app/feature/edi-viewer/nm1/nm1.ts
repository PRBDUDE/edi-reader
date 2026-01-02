import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-nm1',
  imports: [],
  templateUrl: './nm1.html',
  styleUrls: ['./nm1.scss', '../edi-viewer.scss']
})
export class Nm1 implements OnInit {
  data = input<string>('NM1*IL*1*DOE*JOHN****34*123456789~');
  elementDelimiter = input<string>('*');
  subElementDelimiter = input<string>(':');
  segmentDelimiter = input<string>('~');
  valid = false;
  nm1: string[] | undefined;

  ngOnInit() {
    const segmentLength = this.data().length;
    this.nm1 = this.data().substring(0, segmentLength).split(this.elementDelimiter());
    this.valid = true;
  }

  getElementDelimiter() {
    return this.elementDelimiter();
  }

  getNm1Length() {
    if (!this.nm1) return 0;
    return this.nm1.length;
  }
}
