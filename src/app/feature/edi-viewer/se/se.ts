import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-se',
  imports: [],
  templateUrl: './se.html',
  styleUrls: ['./se.scss', '../edi-viewer.scss']
})
export class Se implements OnInit {
  data = input<string>('SE*18*0001~');
  elementDelimiter = input<string>('*');
  subElementDelimiter = input<string>(':');
  segmentDelimiter = input<string>('~');
  valid = false;
  se: string[] | undefined;

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
}
