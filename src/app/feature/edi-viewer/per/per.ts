import {Component, input, OnChanges, OnInit} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {PhoneNumberPipe} from '@pipes/phone-number-pipe';

@Component({
  selector: 'prb-per',
  imports: [
    ElementDescription,
    PhoneNumberPipe
  ],
  templateUrl: './per.html',
  styleUrls: ['./per.scss', '../edi-viewer.scss']
})
export class Per implements OnInit, OnChanges {
  perData = input<string>('PER*IP*JOHN DOE*HP*5551234567~');
  perElementDelimiter = input<string>('*');
  perSubElementDelimiter = input<string>(':');
  perSegmentDelimiter = input<string>('~');
  perValid = false;
  per: string[] | undefined;
  perCommunicationQualifier = [
    { code: 'AP', description: 'alternate phone' },
    { code: 'CP', description: 'cell phone' },
    { code: 'EM', description: 'electronic mail' },
    { code: 'HP', description: 'home phone' },
    { code: 'TE', description: 'telephone' },
  ];

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    if (this.perData()) {
      this.init();
    }
  }

  private init() {
    const segmentLength = this.perData().length;
    this.per = this.perData().substring(0, segmentLength).split(this.perElementDelimiter());
    this.perValid = true;
  }

  getElementDelimiter() {
    return this.perElementDelimiter();
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
