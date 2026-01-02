import {Component, input, OnInit, signal} from '@angular/core';

@Component({
  selector: 'prb-st',
  imports: [],
  templateUrl: './st.html',
  styleUrls: ['./st.scss', '../edi-viewer.scss']
})
export class St implements OnInit {
  data = input<String>('ST*834*0001*005010X220A1~');
  valid = false;
  elementDelimiter = signal('*');
  subElementDelimiter = signal(':');
  segmentDelimiter = signal('~');
  st: String[] | undefined;

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

  getStElement(number: number) {
    return this.st?.[number];
  }
}
