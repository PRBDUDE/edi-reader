import {EdiBuilder} from '@edi/builders/edi-builder';
import {Delimiters} from '@edi/delimiters';

export class IeaBuilder extends EdiBuilder {

  constructor(segment: string, delimiters: Delimiters) {
    super(segment, delimiters);
  }

  override setDescriptions() {
    this.setIdAndDescription(1, 'IEA01', 'number of groups');
    this.setIdAndDescription(2, 'IEA02', 'interchange control number (must match ISA13)');
  }
}
