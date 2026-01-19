import {EdiBuilder} from '@edi/builders/edi-builder';
import {Delimiters} from '@edi/delimiters';

export class HdBuilder extends EdiBuilder {
  constructor(segment: string, delimiters: Delimiters) {
    super(segment, delimiters);
  }

  override setDescriptions() {
    this.setIdAndDescription(1, 'HD01', 'maintenance type code');
    this.setIdAndDescription(3, 'HD03', 'insurance line code');
    this.setIdAndDescription(4, 'HD04', 'plan coverage description');
    this.setIdAndDescription(5, 'HD05', 'coverage level code');
  }
}
