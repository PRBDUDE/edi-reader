import {Component} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {Segment} from '../segment/segment';
import {getRefCodeDescription} from '@edi/code-descriptions/ref';

@Component({
  selector: 'prb-ref',
  imports: [
    ElementDescription
  ],
  templateUrl: './ref.html',
  styleUrls: ['./ref.scss', '../edi-viewer.scss']
})
export class Ref extends Segment {
  constructor() {
    super();
  }

  override init() {
    super.init();
    this.valid = true;
  }

  protected readonly getRefCodeDescription = getRefCodeDescription;
}
