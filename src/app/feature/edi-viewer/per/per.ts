import {Component, input, OnInit} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {PhoneNumberPipe} from '../../../core/pipes/phone-number-pipe';

@Component({
  selector: 'prb-per',
  imports: [
    ElementDescription,
    PhoneNumberPipe
  ],
  templateUrl: './per.html',
  styleUrls: ['./per.scss', '../edi-viewer.scss']
})
export class Per implements OnInit {
  data = input<string>('PER*IP*JOHN DOE*HP*5551234567~');
  elementDelimiter = input<string>('*');
  subElementDelimiter = input<string>(':');
  segmentDelimiter = input<string>('~');
  valid = false;
  per: string[] | undefined;
  perCommunicationQualifier = [
    { code: 'AP', description: 'alternate phone' },
    { code: 'CP', description: 'cell phone' },
    { code: 'EM', description: 'electronic mail' },
    { code: 'HP', description: 'home phone' },
    { code: 'TE', description: 'telephone' },
  ];

  ngOnInit() {
    const segmentLength = this.data().length;
    this.per = this.data().substring(0, segmentLength).split(this.elementDelimiter());
    this.valid = true;
  }

  getElementDelimiter() {
    return this.elementDelimiter();
  }

  getPerLength() {
    if (!this.per) return 0;
    return this.per.length;
  }

  getPerElement(index: number) {
    return this.per![index];
  }

  getPerCommunicationQualifier(code: string) {
    return this.perCommunicationQualifier.find(qualifier => qualifier.code === code);
  }
}
