import {Component, input, OnInit, signal} from '@angular/core';

@Component({
  selector: 'prb-ref',
  imports: [],
  templateUrl: './ref.html',
  styleUrls: ['./ref.scss','../edi-viewer.scss']
})
export class Ref implements OnInit {
  data = input<String>('REF*38*GROUP123~');
  valid = false;
  elementDelimiter = signal('*');
  subElementDelimiter = signal(':');
  segmentDelimiter = signal('~');
  ref: String[] | undefined;

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
