import {Component, input, OnInit} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';

@Component({
  selector: 'prb-ins',
  imports: [
    ElementDescription
  ],
  templateUrl: './ins.html',
  styleUrls: ['./ins.scss', '../edi-viewer.scss']
})
export class Ins implements OnInit {
  insData = input<string>('INS*Y*18*021*XN*A*E**FT~');
  insElementDelimiter = input<string>('*');
  insSubElementDelimiter = input<string>(':');
  insSegmentDelimiter = input<string>('~');
  insValid = false;
  ins: string[] | undefined;

  ngOnInit() {
    const insSegmentLength = this.insData().length;
    this.ins = this.insData().substring(0, insSegmentLength).split(this.insElementDelimiter());
    this.insValid = true;
  }

  getInsElementDelimiter() {
    return this.insElementDelimiter();
  }

  getInsLength() {
    if (!this.ins) return 0;
    return this.ins.length;
  }

  getInsElement(index: number) {
    return this.ins![index];
  }
}
