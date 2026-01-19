import {EdiBuilder} from '@edi/builders/edi-builder';
import {Delimiters} from '@edi/delimiters';

export class SeBuilder extends EdiBuilder {
  constructor(segment: string, delimiters: Delimiters) {
    super(segment, delimiters, 'ST');
  }

  override setDescriptions() {
    this.setIdAndDescription(1, 'SE01', 'segment count from ST-SE including ST & SE lines');
    this.setIdAndDescription(2, 'SE02', 'transaction set control number');
  }
}
