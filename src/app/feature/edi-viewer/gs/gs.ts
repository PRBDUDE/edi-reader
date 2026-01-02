import {Component, input, OnInit, signal} from '@angular/core';

@Component({
  selector: 'prb-gs',
  imports: [],
  templateUrl: './gs.html',
  styleUrls: ['./gs.scss', '../edi-viewer.scss']
})
export class Gs implements OnInit {
  data = input<string>('GS*BE*87790056*576687090*20251107*1430*1*X*005010X220A1~');
  elementDelimiter = input<string>('*');
  subElementDelimiter = input<string>(':');
  segmentDelimiter = input<string>('~');
  groupControlNumber = signal<number>(0);
  valid = false;
  gs: string[] | undefined;

  ngOnInit() {
    const segmentLength = this.data().length;
    this.gs = this.data().substring(0, segmentLength - 1).split(this.elementDelimiter());
    this.groupControlNumber.set(Number(this.gs[6]));
    this.valid = true;
  }

  getElementDelimiter() {
    return this.elementDelimiter();
  }

  getGsLength() {
    if (!this.gs) return 0;
    return this.gs.length;
  }
}
