import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-ins',
  imports: [],
  templateUrl: './ins.html',
  styleUrls: ['./ins.scss', '../edi-viewer.scss']
})
export class Ins implements OnInit {
  data = input<string>('INS*Y*18*021*XN*A*E**FT~');
  elementDelimiter = input<string>('*');
  subElementDelimiter = input<string>(':');
  segmentDelimiter = input<string>('~');
  valid = false;
  ins: string[] | undefined;

  ngOnInit() {
    const segmentLength = this.data().length;
    this.ins = this.data().substring(0, segmentLength - 1).split(this.elementDelimiter());
    this.valid = true;
  }

  getElementDelimiter() {
    return this.elementDelimiter();
  }

  getInsLength() {
    if (!this.ins) return 0;
    return this.ins.length;
  }
}
