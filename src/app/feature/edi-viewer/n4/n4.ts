import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-n4',
  imports: [],
  templateUrl: './n4.html',
  styleUrls: ['./n4.scss', '../edi-viewer.scss']
})
export class N4 implements OnInit {
  data = input<string>('GS*BE*87790056*576687090*20251107*1430*1*X*005010X220A1~');
  elementDelimiter = input<string>('*');
  subElementDelimiter = input<string>(':');
  segmentDelimiter = input<string>('~');
  valid = false;
  n4: string[] | undefined;

  ngOnInit() {
    const segmentLength = this.data().length;
    this.n4 = this.data().substring(0, segmentLength).split(this.elementDelimiter());
    this.valid = true;
  }

  getElementDelimiter() {
    return this.elementDelimiter();
  }

  getN4Length() {
    if (!this.n4) return 0;
    return this.n4.length;
  }
}
