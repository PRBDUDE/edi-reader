import {Component, input, OnChanges, OnInit} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';

@Component({
  selector: 'prb-n4',
  imports: [
    ElementDescription
  ],
  templateUrl: './n4.html',
  styleUrls: ['./n4.scss', '../edi-viewer.scss']
})
export class N4 implements OnInit, OnChanges {
  n4Data = input<string>('GS*BE*87790056*576687090*20251107*1430*1*X*005010X220A1~');
  n4ElementDelimiter = input<string>('*');
  n4SubElementDelimiter = input<string>(':');
  n4SegmentDelimiter = input<string>('~');
  n4Valid = false;
  n4: string[] | undefined;

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    if (this.n4Data()) {
      this.init();
    }
  }

  private init() {
    const n4SegmentLength = this.n4Data().length;
    this.n4 = this.n4Data().substring(0, n4SegmentLength).split(this.n4ElementDelimiter());
    this.n4Valid = true;
  }

  getN4ElementDelimiter() {
    return this.n4ElementDelimiter();
  }

  getN4Length() {
    if (!this.n4) return 0;
    return this.n4.length;
  }

  getN4Element(index: number) {
    return this.n4![index];
  }
}
