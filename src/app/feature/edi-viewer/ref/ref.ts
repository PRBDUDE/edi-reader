import {Component, input} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {Segment} from '../segment/segment';

@Component({
  selector: 'prb-ref',
  imports: [
    ElementDescription
  ],
  templateUrl: './ref.html',
  styleUrls: ['./ref.scss', '../edi-viewer.scss']
})
export class Ref extends Segment {
  refCodeDescription = [
    {code: '0F', description: 'Contract Number'},
    {code: '38', description: 'Group ID'},
  ]

  constructor() {
    super();
  }

  override init() {
    super.init();
    this.valid = true;
  }

  getRefCodeDescription(code: string) {
    return this.refCodeDescription.find(x => x.code === code);
  }
}
