import {Component, input, OnInit, signal} from '@angular/core';

@Component({
  selector: 'prb-isa',
  imports: [],
  templateUrl: './isa.html',
  styleUrls: ['./isa.scss', '../edi-viewer.scss']
})
export class Isa implements OnInit {
  data = input<String>('ISA*00*          *00*          *ZZ*87790056      *ZZ*576687090     *251107*1430*U*00501*000000905*0*T*:~');
  segmentDelimiter = signal<String>('~');
  valid = false;
  elementDelimiter = this.data().charAt(102);
  subElementDelimiter = this.data().charAt(103);
  interchangeControlNumber = signal(0);
  isa: String[] | undefined;

  ngOnInit() {
    this.valid = this.data().length === 104;
    this.segmentDelimiter.set(this.data().charAt(103));
    this.elementDelimiter = this.data().charAt(101);
    this.subElementDelimiter = this.data().charAt(102);
    this.isa = this.data().substring(0,103).split(this.elementDelimiter);
    this.interchangeControlNumber.set(Number(this.isa[13]));
  }

  getSegmentDelimiter() {
    return this.segmentDelimiter();
  }

  getElementDelimiter() {
    return this.elementDelimiter;
  }

  getSubElementDelimiter() {
    return this.subElementDelimiter;
  }

  getIsaLength() {
    if (!this.isa) return 0;
    return this.isa.length;
  }

  getIsaElement(idx: number) {
    return this.isa?.[idx];
  }
}
