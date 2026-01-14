import {Component, input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'prb-segment',
  imports: [],
  templateUrl: './segment.html',
  styleUrls: ['./segment.scss', '../messy-edi-viewer.scss']
})
export class Segment implements OnInit, OnChanges {
  data = input<string>('');
  segmentDelimiter = input<string>('~');
  elementDelimiter = input<string>('*');
  subElementDelimiter = input<string>(':');
  valid = false;
  parsedElements: string[] | undefined;

  ngOnInit() {
    this.init()
  }

  ngOnChanges() {
    this.init();
  }

  protected init() {
    this.valid = this.data().length > 0;
    this.parsedElements = this.data()
      .substring(0, this.data().length)
      .split(String(this.elementDelimiter()));
  }

  getElementDelimiter() {
    return this.elementDelimiter();
  }

  getElementSize() {
    if (!this.parsedElements) return 0;
    return this.parsedElements.length;
  }

  getElement(index: number) {
    return this.parsedElements![index];
  }

  getLength() {
    return this.parsedElements!.length;
  }
}
