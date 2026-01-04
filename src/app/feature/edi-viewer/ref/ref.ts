import {Component, input, OnInit} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';

@Component({
  selector: 'prb-ref',
  imports: [
    ElementDescription
  ],
  templateUrl: './ref.html',
  styleUrls: ['./ref.scss', '../edi-viewer.scss']
})
export class Ref implements OnInit {
  refData = input<string>('REF*38*GROUP123~');
  refElementDelimiter = input<string>('*');
  refSubElementDelimiter = input<string>(':');
  refSegmentDelimiter = input<string>('~');
  refValid = false;
  ref: string[] | undefined;
  refCodeDescription = [
    { code: '0F', description: 'Contract Number' },
    { code: '38', description: 'Group ID' },
  ]

  ngOnInit() {
    const refSegmentLength = this.refData().length;
    this.ref = this.refData().substring(0, refSegmentLength).split(this.refElementDelimiter());
    this.refValid = true;
  }

  getRefElementDelimiter() {
    return this.refElementDelimiter();
  }

  getRefLength() {
    if (!this.ref) return 0;
    return this.ref.length;
  }

  getRefElement(index: number) {
    return this.ref![index];
  }

  getRefCodeDescription(code: string) {
    return this.refCodeDescription.find(x => x.code === code);
  }
}
