import {Component, input, OnChanges, OnInit} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {PhoneNumberPipe} from '@pipes/phone-number-pipe';
import {Segment} from '../segment/segment';

@Component({
  selector: 'prb-per',
  imports: [
    ElementDescription,
    PhoneNumberPipe
  ],
  templateUrl: './per.html',
  styleUrls: ['./per.scss', '../edi-viewer.scss']
})
export class Per extends Segment{
  perCommunicationQualifier = [
    { code: 'AP', description: 'alternate phone' },
    { code: 'CP', description: 'cell phone' },
    { code: 'EM', description: 'electronic mail' },
    { code: 'HP', description: 'home phone' },
    { code: 'TE', description: 'telephone' },
  ];

  constructor() {
    super();
  }

  override init() {
    super.init();
    this.valid = true;
  }

  getPerCommunicationQualifier(code: string) {
    return this.perCommunicationQualifier.find(qualifier => qualifier.code === code);
  }
}
