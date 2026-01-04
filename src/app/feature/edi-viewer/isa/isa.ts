import {Component, input, OnInit, signal} from '@angular/core';

@Component({
  selector: 'prb-isa',
  imports: [],
  templateUrl: './isa.html',
  styleUrls: ['./isa.scss', '../edi-viewer.scss']
})
export class Isa implements OnInit {
  isaData = input<string>('ISA*00*          *00*          *ZZ*87790056      *ZZ*576687090     *251107*1430*U*00501*000000905*0*T*:~');
  isaSegmentDelimiter = input<string>('~');
  isaElementDelimiter = input<string>('*');
  isaSubElementDelimiter = input<string>(':');
  isaInterchangeControlNumber = signal(0);
  isaValid = false;
  isa: string[] | undefined;

  ngOnInit() {
    const isaSegmentLength = this.isaData().length;
    this.isa = this.isaData().substring(0,isaSegmentLength).split(this.isaElementDelimiter());
    this.isaInterchangeControlNumber.set(Number(this.isa[13]));
    this.isaValid = this.isaData().length === 104;
  }

  getIsaElementDelimiter() {
    return this.isaElementDelimiter();
  }

  getIsaLength() {
    if (!this.isa) return 0;
    return this.isa.length;
  }

  getIsaElement(index: number){
    return this.isa![ index];
  }
}
