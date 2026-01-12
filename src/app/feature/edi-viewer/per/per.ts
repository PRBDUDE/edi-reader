import {Component} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {PhoneNumberPipe} from '@pipes/phone-number-pipe';
import {Segment} from '../segment/segment';
import {getPerCommunicationQualifier} from '@edi/code-descriptions/per';

@Component({
  selector: 'prb-per',
  imports: [
    ElementDescription,
    PhoneNumberPipe
  ],
  templateUrl: './per.html',
  styleUrls: ['./per.scss', '../edi-viewer.scss']
})
export class Per extends Segment {
  constructor() {
    super();
  }

  override init() {
    super.init();
    this.valid = true;
  }

  protected readonly getPerCommunicationQualifier = getPerCommunicationQualifier;
}
