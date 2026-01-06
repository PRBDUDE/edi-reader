import {Component, input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {D8DatePipe} from '@pipes/d8-date-pipe';

@Component({
  selector: 'prb-bgn',
  imports: [
    ElementDescription,
    D8DatePipe
  ],
  templateUrl: './bgn.html',
  styleUrls: ['./bgn.scss', '../edi-viewer.scss']
})
export class Bgn implements OnInit, OnChanges {
  bgnData = input<string>('BGN*00*123456*20251107*1430~');
  bgnElementDelimiter = input<string>('*');
  bgnSubElementDelimiter = input<string>(':');
  bgnSegmentDelimiter = input<string>('~');
  bgnValid = false;
  bgn: string[] | undefined;

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    if (this.bgnData()) {
      this.init();
    }
  }

  private init() {
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
    return this.bgn![index];
  }
}
