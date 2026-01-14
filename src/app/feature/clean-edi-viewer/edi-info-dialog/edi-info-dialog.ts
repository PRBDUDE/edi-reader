import {Component, input} from '@angular/core';
import {EdiBuilder} from '@edi/builders/edi-builder';
import {DecimalPipe} from '@angular/common';
import {D8DatePipe} from '@pipes/d8-date-pipe';

@Component({
  selector: 'prb-edi-info-dialog',
  imports: [
    DecimalPipe,
    D8DatePipe
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

  protected readonly String = String;
}
