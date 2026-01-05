import {Component, input, OnChanges, OnInit} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';

@Component({
  selector: 'prb-hd',
  imports: [
    ElementDescription
  ],
  templateUrl: './hd.html',
  styleUrls: ['./hd.scss', '../edi-viewer.scss']
})
export class Hd implements OnInit, OnChanges {
  hdData = input<string>('GS*BE*87790056*576687090*20251107*1430*1*X*005010X220A1~');
  hdElementDelimiter = input<string>('*');
  hdSubElementDelimiter = input<string>(':');
  hdSegmentDelimiter = input<string>('~');
  hdValid = false;
  hd: string[] | undefined;

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    if (this.hdData()) {
      this.init();
    }
  }

  private init() {
    const hdSegmentLength = this.hdData().length;
    this.hd = this.hdData().substring(0, hdSegmentLength).split(this.hdElementDelimiter());
    this.hdValid = true;
  }

  getHdElementDelimiter() {
    return this.hdElementDelimiter();
  }

  getHdLength() {
    if (!this.hd) return 0;
    return this.hd.length;
  }

  getHdElement(index: number) {
    return this.hd![index];
  }
}
