import {EdiBuilder} from '@edi/builders/edi-builder';
import {Delimiters} from '@edi/delimiters';

export class DmgBuilder extends EdiBuilder {
  constructor(segment: string, delimiters: Delimiters) {
    super(segment, delimiters);
  }

  override setDescriptions() {
    this.setIdAndDescription(1, 'DMG01', 'date format');
    this.setIdAndDescription(2, 'DMG02', 'birthdate');
    this.setIdAndDescription(3, 'DMG03', 'gender');
  }
}
