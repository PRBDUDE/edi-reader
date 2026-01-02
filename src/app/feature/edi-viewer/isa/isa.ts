import {Component, input, OnInit, signal} from '@angular/core';

@Component({
  selector: 'prb-isa',
  imports: [],
  templateUrl: './isa.html',
  styleUrls: ['./isa.scss', '../edi-viewer.scss']
})
export class Isa implements OnInit {
  data = input<string>('ISA*00*          *00*          *ZZ*87790056      *ZZ*576687090     *251107*1430*U*00501*000000905*0*T*:~');
  segmentDelimiter = input<string>('~');
  elementDelimiter = input<string>('*');
  subElementDelimiter = input<string>(':');
  interchangeControlNumber = signal(0);
  valid = false;
  isa: string[] | undefined;

  ngOnInit() {
    this.valid = this.data().length === 104;
    this.isa = this.data().substring(0,103).split(this.elementDelimiter());
    this.interchangeControlNumber.set(Number(this.isa[13]));
  }

  getElementDelimiter() {
    return this.elementDelimiter();
  }

  getIsaLength() {
    if (!this.isa) return 0;
    return this.isa.length;
  }
}
