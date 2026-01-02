import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-bgn',
  imports: [],
  templateUrl: './bgn.html',
  styleUrls: ['./bgn.scss', '../edi-viewer.scss']
})
export class Bgn implements OnInit {
  data = input<string>('BGN*00*123456*20251107*1430~');
  elementDelimiter = input<string>('*');
  subElementDelimiter = input<string>(':');
  segmentDelimiter = input<string>('~');
  valid = false;
  bgn: string[] | undefined;

  ngOnInit() {
    const segmentLength = this.data().length;
    this.bgn = this.data().substring(0, segmentLength).split(this.elementDelimiter());
    this.valid = true;
  }

  getBgnLength() {
    if (!this.bgn) return 0;
    return this.bgn.length;
  }

  getElementDelimiter() {
    return this.elementDelimiter();
  }
}
