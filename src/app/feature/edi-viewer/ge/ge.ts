import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-ge',
  imports: [],
  templateUrl: './ge.html',
  styleUrls: ['./ge.scss', '../edi-viewer.scss']
})
export class Ge implements OnInit {
  geData = input<string>('GE*2*1~');
  geElementDelimiter = input<string>('*');
  geSubElementDelimiter = input<string>(':');
  geSegmentDelimiter = input<string>('~');
  geNumberOfTransactionSets = input(0);
  geGroupControlNumber = input(0);
  geValid = false;
  ge: string[] | undefined;

  ngOnInit() {
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
}
