import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-st',
  imports: [],
  templateUrl: './st.html',
  styleUrls: ['./st.scss', '../edi-viewer.scss']
})
export class St implements OnInit {
  stData = input<string>('ST*834*0001*005010X220A1~');
  stElementDelimiter = input<string>('*');
  stSubElementDelimiter = input<string>(':');
  stSegmentDelimiter = input<string>('~');
  stValid = false;
  st: string[] | undefined;

  ngOnInit() {
    const segmentLength = this.stData().length;
    this.st = this.stData().substring(0, segmentLength).split(this.stElementDelimiter());
    this.stValid = true;
  }

  getElementDelimiter() {
    return this.stElementDelimiter();
  }

  getStLength() {
    if (!this.st) return 0;
    return this.st.length;
  }
}
