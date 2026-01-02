import {Component, input, OnInit, signal} from '@angular/core';

@Component({
  selector: 'prb-n3',
  imports: [],
  templateUrl: './n3.html',
  styleUrls: ['./n3.scss','../edi-viewer.scss']
})
export class N3 implements OnInit {
  data = input<String>('N3*100 MAIN ST~');
  valid = false;
  elementDelimiter = signal('*');
  subElementDelimiter = signal(':');
  segmentDelimiter = signal('~');
  n3: String[] | undefined;

  ngOnInit() {
    const segmentLength = this.data().length;
    this.n3 = this.data().substring(0, segmentLength).split(this.elementDelimiter());
    this.valid = true;
  }

  getElementDelimiter() {
    return this.elementDelimiter();
  }

  getN3Length() {
    if (!this.n3) return 0;
    return this.n3.length;
  }
}
