import {Component, input, OnChanges, OnInit} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';

@Component({
  selector: 'prb-iea',
  imports: [
    ElementDescription
  ],
  templateUrl: './iea.html',
  styleUrls: ['./iea.scss', '../edi-viewer.scss']
})
export class Iea implements OnInit, OnChanges {
  ieaData = input<string>('IEA*1*000000905~');
  ieaInterchangeControlNumber = input<number>(0);
  ieaElementDelimiter = input<string>('*');
  ieaSubElementDelimiter = input<string>(':');
  ieaSegmentDelimiter = input<string>('~');
  ieaValid = false;
  iea: string[] | undefined;

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    if (this.ieaData()) {
      this.init();
    }
  }

  private init() {
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

  getIeaElement(index: number) {
    return this.iea![index];
  }
}
