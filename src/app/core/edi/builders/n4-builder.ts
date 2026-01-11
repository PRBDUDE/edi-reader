import {EdiBuilder} from '@edi/builders/edi-builder';
import {Delimiters} from '@edi/delimiters';

export class N4Builder extends EdiBuilder {
  constructor(segment: string, delimiters: Delimiters) {
    super(segment, delimiters);
  }

  override setDescriptions() {
    this.setIdAndDescription(1, 'N401', 'city');
    this.setIdAndDescription(2, 'N402', 'state code');
    this.setIdAndDescription(3, 'N403', 'zip code');
  }
}
