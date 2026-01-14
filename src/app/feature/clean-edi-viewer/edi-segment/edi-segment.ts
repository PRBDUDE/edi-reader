import {Component, input} from '@angular/core';
import {EdiBuilder} from '@edi/builders/edi-builder';

@Component({
  selector: 'prb-edi-segment',
  imports: [],
  templateUrl: './edi-segment.html',
  styleUrl: './edi-segment.scss',
})
export class EdiSegment {
  segment = input<EdiBuilder>();

  isLastSegment(index: number) {
    const elements = this.segment()?.getElements();
    return index == ((elements?.length || 1) - 1);
  }
}
