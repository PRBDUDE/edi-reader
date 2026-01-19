import {EdiBuilder} from '@edi/builders/edi-builder';
import {Delimiters} from '@edi/delimiters';

export class GeBuilder extends EdiBuilder {
  constructor(segment: string, delimiters: Delimiters) {
    super(segment, delimiters, 'GS');
  }

  override setDescriptions() {
    this.setIdAndDescription(1, 'GE01', 'number of transaction sets');
    this.setIdAndDescription(2, 'GE02', 'control group number (must match GS06)');
  }
}
