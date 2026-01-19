import {EdiBuilder} from '@edi/builders/edi-builder';
import {Delimiters} from '@edi/delimiters';

export class StBuilder extends EdiBuilder {
  constructor(segment: string, delimiters: Delimiters) {
    super(segment, delimiters, 'ST');
  }

  override setDescriptions() {
    this.setIdAndDescription(1, 'ST01', 'transaction set identifier code');
    this.setIdAndDescription(2, 'ST02', 'transaction set control number');
    this.setIdAndDescription(3, 'ST03', 'implementation convention reference');
  }
}
