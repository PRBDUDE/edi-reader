import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-hd',
  imports: [],
  templateUrl: './hd.html',
  styleUrls: ['./hd.scss', '../edi-viewer.scss']
})
export class Hd implements OnInit {
  data = input<string>('GS*BE*87790056*576687090*20251107*1430*1*X*005010X220A1~');
  elementDelimiter = input<string>('*');
  subElementDelimiter = input<string>(':');
  segmentDelimiter = input<string>('~');
  valid = false;
  hd: string[] | undefined;

  ngOnInit() {
    const segmentLength = this.data().length;
    this.hd = this.data().substring(0, segmentLength).split(this.elementDelimiter());
    this.valid = true;
  }

  getElementDelimiter() {
    return this.elementDelimiter();
  }

  getHdLength() {
    if (!this.hd) return 0;
    return this.hd.length;
  }
}
