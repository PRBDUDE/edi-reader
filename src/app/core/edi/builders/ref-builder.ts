import {EdiBuilder} from '@edi/builders/edi-builder';
import {Delimiters} from '@edi/delimiters';

export class RefBuilder extends EdiBuilder {
  constructor(segment: string, delimiters: Delimiters) {
    super(segment, delimiters);
  }

  override setDescriptions() {
    let ref01Description = 'reference identifier qualifier';
    let ref02Description = 'reference identification';
    if (this._segment.getElement(1) === '38') {
      ref01Description = 'group';
      ref02Description = 'group number';
    } else if (this._segment.getElement(1) === '0F') {
      ref01Description = 'contract number';
      ref02Description = 'contract number';
    } else if (this._segment.getElement(1) === '1L') {
      ref01Description = 'sub plan';
      ref02Description = 'sub plan ID';
    }
    this.setIdAndDescription(1, 'REF01', ref01Description);
    this.setIdAndDescription(2, 'REF02', ref02Description);
  }
}
