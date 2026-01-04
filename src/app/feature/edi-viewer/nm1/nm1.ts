import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-nm1',
  imports: [],
  templateUrl: './nm1.html',
  styleUrls: ['./nm1.scss', '../edi-viewer.scss']
})
export class Nm1 implements OnInit {
  nm1Data = input<string>('NM1*IL*1*DOE*JOHN****34*123456789~');
  nm1ElementDelimiter = input<string>('*');
  nm1SubElementDelimiter = input<string>(':');
  nm1SegmentDelimiter = input<string>('~');
  nm1Valid = false;
  nm1: string[] | undefined;

  ngOnInit() {
    const nm1SegmentLength = this.nm1Data().length;
    this.nm1 = this.nm1Data().substring(0, nm1SegmentLength).split(this.nm1ElementDelimiter());
    this.nm1Valid = true;
  }

  getNm1ElementDelimiter() {
    return this.nm1ElementDelimiter();
  }

  getNm1Length() {
    if (!this.nm1) return 0;
    return this.nm1.length;
  }
}
