import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-n1',
  imports: [],
  templateUrl: './n1.html',
  styleUrls: ['./n1.scss', '../edi-viewer.scss']
})
export class N1 implements OnInit {
  data = input<string>('N1*P5*ACME EMPLOYER~');
  elementDelimiter = input<string>('*');
  subElementDelimiter = input<string>(':');
  segmentDelimiter = input<string>('~');
  valid = false;
  n1: string[] | undefined;

  ngOnInit() {
    const segmentLength = this.data().length;
    this.n1 = this.data().substring(0, segmentLength).split(this.elementDelimiter());
    this.valid = true;
  }

  getElementDelimiter() {
    return this.elementDelimiter();
  }

  getN1Length() {
    if (!this.n1) return 0;
    return this.n1.length;
  }
}
