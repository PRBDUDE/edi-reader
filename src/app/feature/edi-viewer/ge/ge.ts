import {Component, input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';

@Component({
  selector: 'prb-ge',
  imports: [
    ElementDescription
  ],
  templateUrl: './ge.html',
  styleUrls: ['./ge.scss', '../edi-viewer.scss']
})
export class Ge implements OnInit, OnChanges {
  geData = input<string>('GE*2*1~');
  geElementDelimiter = input<string>('*');
  geSubElementDelimiter = input<string>(':');
  geSegmentDelimiter = input<string>('~');
  geNumberOfTransactionSets = input(0);
  geGroupControlNumber = input(0);
  geValid = false;
  ge: string[] | undefined;

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    if (this.geData()) {
      this.init();
    }
  }

  private init() {
    const geSegmentLength = this.geData().length;
    this.ge = this.geData().substring(0, geSegmentLength).split(this.geElementDelimiter());
    this.geValid = (this.geGroupControlNumber() == Number(this.ge[2])) &&
      (this.geNumberOfTransactionSets() == Number(this.ge[1]));
  }

  getGeLength() {
    if (!this.ge) return 0;
    return this.ge.length;
  }

  getGeElementDelimiter() {
    return this.geElementDelimiter();
  }

  getGeElement(index: number) {
    return this.ge![index];
  }
}
