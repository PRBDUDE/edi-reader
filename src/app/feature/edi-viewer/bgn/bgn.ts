import {Component, input, OnInit} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';

@Component({
  selector: 'prb-bgn',
  imports: [
    ElementDescription
  ],
  templateUrl: './bgn.html',
  styleUrls: ['./bgn.scss', '../edi-viewer.scss']
})
export class Bgn implements OnInit {
  bgnData = input<string>('BGN*00*123456*20251107*1430~');
  bgnElementDelimiter = input<string>('*');
  bgnSubElementDelimiter = input<string>(':');
  bgnSegmentDelimiter = input<string>('~');
  bgnValid = false;
  bgn: string[] | undefined;

  ngOnInit() {
    const bgnSegmentLength = this.bgnData().length;
    this.bgn = this.bgnData().substring(0, bgnSegmentLength).split(this.bgnElementDelimiter());
    this.bgnValid = true;
  }

  getBgnLength() {
    if (!this.bgn) return 0;
    return this.bgn.length;
  }

  getBgnElementDelimiter() {
    return this.bgnElementDelimiter();
  }

  getBgnElement(index: number) {
    return this.bgn[index];
  }
}
