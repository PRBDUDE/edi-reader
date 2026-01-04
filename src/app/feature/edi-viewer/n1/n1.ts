import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-n1',
  imports: [],
  templateUrl: './n1.html',
  styleUrls: ['./n1.scss', '../edi-viewer.scss']
})
export class N1 implements OnInit {
  n1Data = input<string>('N1*P5*ACME EMPLOYER~');
  n1ElementDelimiter = input<string>('*');
  n1SubElementDelimiter = input<string>(':');
  n1SegmentDelimiter = input<string>('~');
  n1Valid = false;
  n1: string[] | undefined;

  ngOnInit() {
    const n1SegmentLength = this.n1Data().length;
    this.n1 = this.n1Data().substring(0, n1SegmentLength).split(this.n1ElementDelimiter());
    this.n1Valid = true;
  }

  getN1ElementDelimiter() {
    return this.n1ElementDelimiter();
  }

  getN1Length() {
    if (!this.n1) return 0;
    return this.n1.length;
  }
}
