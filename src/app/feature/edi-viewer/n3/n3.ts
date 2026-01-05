import {Component, input, OnChanges, OnInit} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';

@Component({
  selector: 'prb-n3',
  imports: [
    ElementDescription
  ],
  templateUrl: './n3.html',
  styleUrls: ['./n3.scss', '../edi-viewer.scss']
})
export class N3 implements OnInit, OnChanges {
  n3Data = input<string>('N3*100 MAIN ST~');
  n3ElementDelimiter = input<string>('*');
  n3SubElementDelimiter = input<string>(':');
  n3SegmentDelimiter = input<string>('~');
  n3Valid = false;
  n3: string[] | undefined;

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    if (this.n3Data()) {
      this.init();
    }
  }

  private init() {
    const n3SegmentLength = this.n3Data().length;
    this.n3 = this.n3Data().substring(0, n3SegmentLength).split(this.n3ElementDelimiter());
    this.n3Valid = true;
  }

  getN3ElementDelimiter() {
    return this.n3ElementDelimiter();
  }

  getN3Length() {
    if (!this.n3) return 0;
    return this.n3.length;
  }

  getN3Element(index: number) {
    return this.n3![index];
  }
}
