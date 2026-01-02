import {Component, input, OnInit, signal} from '@angular/core';

@Component({
  selector: 'prb-se',
  imports: [],
  templateUrl: './se.html',
  styleUrls: ['./se.scss','../edi-viewer.scss']
})
export class Se implements OnInit {
  data = input<String>('SE*18*0001~');
  valid = false;
  elementDelimiter = signal('*');
  subElementDelimiter = signal(':');
  segmentDelimiter = signal('~');
  se: String[] | undefined;

  ngOnInit() {
    const segmentLength = this.data().length;
    this.se = this.data().substring(0, segmentLength).split(this.elementDelimiter());
    this.valid = true;
  }

  getElementDelimiter() {
    return this.elementDelimiter();
  }

  getSeLength() {
    if (!this.se) return 0;
    return this.se.length;
  }

  getSeElement(number: number) {
    return this.se?.[number];
  }
}
