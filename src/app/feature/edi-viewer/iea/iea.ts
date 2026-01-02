import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-iea',
  imports: [],
  templateUrl: './iea.html',
  styleUrls: ['./iea.scss', '../edi-viewer.scss']
})
export class Iea implements OnInit {
  data = input<String>('IEA*1*000000905~');
  interchangeControlNumber = input<number>(0);
  elementDelimiter = input<string>('*');
  subElementDelimiter = input<string>(':');
  segmentDelimiter = input<string>('~');
  valid = false;
  iea: String[] | undefined;

  ngOnInit() {
    const segmentLength = this.data().length;
    this.iea = this.data().substring(0, segmentLength).split(this.elementDelimiter());
    this.valid = Number(this.iea[2]) == this.interchangeControlNumber();
  }

  getElementDelimiter() {
    return this.elementDelimiter();
  }
}
