import {EdiBuilder} from '@edi/builders/edi-builder';
import {Delimiters} from '@edi/delimiters';

export class N1Builder extends EdiBuilder {
  constructor(segment: string, delimiters: Delimiters) {
    super(segment, delimiters);
  }

  override setDescriptions() : void {
    this.setIdAndDescription(1, 'N101', 'entity identifier code');
    this.setIdAndDescription(2, 'N102', 'identification code qualifier');
    this.setIdAndDescription(3, 'N103', 'identification code (conditional)');
    this.setIdAndDescription(4, 'N104', 'entity name (conditional)');
    this.setIdAndDescription(5, 'N105', 'identification code qualifier (optional)');
    this.setIdAndDescription(6, 'N106', 'identification code (optional)');
  }
}
