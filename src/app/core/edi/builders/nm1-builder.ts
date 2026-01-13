import {EdiBuilder} from '@edi/builders/edi-builder';
import {Delimiters} from '@edi/delimiters';

export class Nm1Builder extends EdiBuilder {
  constructor(segment: string, delimiters: Delimiters) {
    super(segment, delimiters);
  }

  override setDescriptions() {
    this.setIdAndDescription(1, 'NM101', 'relationship code');
    this.setIdAndDescription(2, 'NM102', 'entity identifier code');
    this.setIdAndDescription(3, 'NM103', 'last name');
    this.setIdAndDescription(4, 'NM104', 'first name');
    this.setIdAndDescription(5, 'NM105', 'middle initial or name');
    this.setIdAndDescription(6, 'NM106', 'identification code');
    this.setIdAndDescription(7, 'NM107', 'entity type');
    this.setIdAndDescription(8, 'NM108', 'identification code qualifier');
    this.setIdAndDescription(9, 'NM109', 'identification code');
  }
}
