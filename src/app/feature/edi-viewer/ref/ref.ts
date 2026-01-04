import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-ref',
  imports: [],
  templateUrl: './ref.html',
  styleUrls: ['./ref.scss', '../edi-viewer.scss']
})
export class Ref implements OnInit {
  refData = input<string>('REF*38*GROUP123~');
  refElementDelimiter = input<string>('*');
  refSubElementDelimiter = input<string>(':');
  refSegmentDelimiter = input<string>('~');
  refValid = false;
  ref: string[] | undefined;

  ngOnInit() {
    const refSegmentLength = this.refData().length;
    this.ref = this.refData().substring(0, refSegmentLength).split(this.refElementDelimiter());
    this.refValid = true;
  }

  getRefElementDelimiter() {
    return this.refElementDelimiter();
  }

  getRefLength() {
    if (!this.ref) return 0;
    return this.ref.length;
  }
}
