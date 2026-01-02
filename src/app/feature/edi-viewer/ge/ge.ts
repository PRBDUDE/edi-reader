import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-ge',
  imports: [],
  templateUrl: './ge.html',
  styleUrls: ['./ge.scss', '../edi-viewer.scss']
})
export class Ge implements OnInit {
  data = input<string>('GE*2*1~');
  elementDelimiter = input<string>('*');
  subElementDelimiter = input<string>(':');
  segmentDelimiter = input<string>('~');
  numberOfTransactionSets = input(0);
  groupControlNumber = input(0);
  valid = false;
  ge: string[] | undefined;

  ngOnInit() {
    const segmentLength = this.data().length;
    this.ge = this.data().substring(0, segmentLength).split(this.elementDelimiter());
    this.valid = (this.groupControlNumber() == Number(this.ge[2])) &&
      (this.numberOfTransactionSets() == Number(this.ge[1]));
  }

  getElementDelimiter() {
    return this.elementDelimiter();
  }
}
