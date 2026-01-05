import {Component, input, OnChanges, OnInit} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';

@Component({
  selector: 'prb-nm1',
  imports: [
    ElementDescription
  ],
  templateUrl: './nm1.html',
  styleUrls: ['./nm1.scss', '../edi-viewer.scss']
})
export class Nm1 implements OnInit, OnChanges {
  nm1Data = input<string>('NM1*IL*1*DOE*JOHN****34*123456789~');
  nm1ElementDelimiter = input<string>('*');
  nm1SubElementDelimiter = input<string>(':');
  nm1SegmentDelimiter = input<string>('~');
  nm1Valid = false;
  nm1: string[] | undefined;

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    if (this.nm1Data()) {
      this.init();
    }
  }

  private init() {
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

  getNm1Element(index: number) {
    return this.nm1![index];
  }
}
