import {Component, input, OnInit, signal} from '@angular/core';

@Component({
  selector: 'prb-bgn',
  imports: [],
  templateUrl: './bgn.html',
  styleUrls: ['./bgn.scss','../edi-viewer.scss']
})
export class Bgn implements OnInit {
  data = input<String>('BGN*00*123456*20251107*1430~');
  valid = false;
  elementDelimiter = signal('*');
  subElementDelimiter = signal(':');
  segmentDelimiter = signal('~');
  bgn: String[] | undefined;

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
