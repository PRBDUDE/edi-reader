import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-ref',
  imports: [],
  templateUrl: './ref.html',
  styleUrls: ['./ref.scss', '../edi-viewer.scss']
})
export class Ref implements OnInit {
  data = input<string>('REF*38*GROUP123~');
  elementDelimiter = input<string>('*');
  subElementDelimiter = input<string>(':');
  segmentDelimiter = input<string>('~');
  valid = false;
  ref: string[] | undefined;

  ngOnInit() {
    const segmentLength = this.data().length;
    this.ref = this.data().substring(0, segmentLength).split(this.elementDelimiter());
    this.valid = true;
  }

  getElementDelimiter() {
    return this.elementDelimiter();
  }

  getRefLength() {
    if (!this.ref) return 0;
    return this.ref.length;
  }
}
