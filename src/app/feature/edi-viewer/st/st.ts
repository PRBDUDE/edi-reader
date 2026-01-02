import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-st',
  imports: [],
  templateUrl: './st.html',
  styleUrls: ['./st.scss', '../edi-viewer.scss']
})
export class St implements OnInit {
  data = input<string>('ST*834*0001*005010X220A1~');
  elementDelimiter = input<string>('*');
  subElementDelimiter = input<string>(':');
  segmentDelimiter = input<string>('~');
  valid = false;
  st: string[] | undefined;

  ngOnInit() {
    const segmentLength = this.data().length;
    this.st = this.data().substring(0, segmentLength).split(this.elementDelimiter());
    this.valid = true;
  }

  getElementDelimiter() {
    return this.elementDelimiter();
  }

  getStLength() {
    if (!this.st) return 0;
    return this.st.length;
  }
}
