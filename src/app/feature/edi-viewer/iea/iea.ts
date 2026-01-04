import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-iea',
  imports: [],
  templateUrl: './iea.html',
  styleUrls: ['./iea.scss', '../edi-viewer.scss']
})
export class Iea implements OnInit {
  ieaData = input<string>('IEA*1*000000905~');
  ieaInterchangeControlNumber = input<number>(0);
  ieaElementDelimiter = input<string>('*');
  ieaSubElementDelimiter = input<string>(':');
  ieaSegmentDelimiter = input<string>('~');
  ieaValid = false;
  iea: string[] | undefined;

  ngOnInit() {
    const ieaSegmentLength = this.ieaData().length;
    this.iea = this.ieaData().substring(0, ieaSegmentLength).split(this.ieaElementDelimiter());
    this.ieaValid = Number(this.iea[2]) == this.ieaInterchangeControlNumber();
  }

  getIeaElementDelimiter() {
    return this.ieaElementDelimiter();
  }

  getIeaLength() {
    if (!this.iea) return 0;
    return this.iea.length;
  }
}
