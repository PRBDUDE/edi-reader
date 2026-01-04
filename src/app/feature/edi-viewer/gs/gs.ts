import {Component, input, OnInit, signal} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';

@Component({
  selector: 'prb-gs',
  imports: [
    ElementDescription
  ],
  templateUrl: './gs.html',
  styleUrls: ['./gs.scss', '../edi-viewer.scss']
})
export class Gs implements OnInit {
  gsData = input<string>('GS*BE*87790056*576687090*20251107*1430*1*X*005010X220A1~');
  gsElementDelimiter = input<string>('*');
  gsSubElementDelimiter = input<string>(':');
  gsSegmentDelimiter = input<string>('~');
  gsGroupControlNumber = signal<number>(0);
  gsValid = false;
  gs: string[] | undefined;

  ngOnInit() {
    const gsSegmentLength = this.gsData().length;
    this.gs = this.gsData().substring(0, gsSegmentLength).split(this.gsElementDelimiter());
    this.gsGroupControlNumber.set(Number(this.gs[6]));
    this.gsValid = true;
  }

  getGsElementDelimiter() {
    return this.gsElementDelimiter();
  }

  getGsLength() {
    if (!this.gs) return 0;
    return this.gs.length;
  }

  getGsElement(index: number){
    return this.gs![ index];
  }
}
