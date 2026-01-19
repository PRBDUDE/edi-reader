import {Component, input} from '@angular/core';
import {EdiBuilder} from '@edi/builders/edi-builder';
import {DecimalPipe} from '@angular/common';
import {D8DatePipe} from '@pipes/d8-date-pipe';
import {D6DatePipe} from '@pipes/d6-date-pipe';

@Component({
  selector: 'prb-edi-info-dialog',
  imports: [
    DecimalPipe,
    D8DatePipe,
    D6DatePipe
  ],
  templateUrl: './edi-info-dialog.html',
  styleUrl: './edi-info-dialog.scss',
})
export class EdiInfoDialog {
  segment = input<EdiBuilder>();

  isLastElementD8(index: number) {
    if (index === 0) return false;
    const elements = this.segment()?.getElements();
    return elements?.[index - 1].getElement() === 'D8';
  }

  isIsa09(index: number) {
    if (this.segment()?.getElement(0) !== 'ISA') return false;
    return (index === 9);
  }

  isGs04(index: number) {
    if (this.segment()?.getElement(0) !== 'GS') return false;
    return (index === 4);
  }

  isBgn03(index: number) {
    if (this.segment()?.getElement(0) !== 'BGN') return false;
    return (index === 3);
  }

  protected readonly String = String;
}
