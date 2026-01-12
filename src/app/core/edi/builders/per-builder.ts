import {EdiBuilder} from '@edi/builders/edi-builder';
import {Delimiters} from '@edi/delimiters';
import {getPerCommunicationQualifier} from '@edi/code-descriptions/per';

export class PerBuilder extends EdiBuilder {
  constructor(segment: string, delimiters: Delimiters) {
    super(segment, delimiters);
  }

  override setDescriptions() {
    this.setIdAndDescription(1, 'PER01', 'contact name code');
    this.setIdAndDescription(2, 'PER02', 'contact name');
    this.setIdAndDescription(3, 'PER03',
      getPerCommunicationQualifier(this._segment.getElement(3) as string));
    this.setIdAndDescription(4, 'PER04', 'communication number');
    if (this._segment.getElement(5)) {
      this.setIdAndDescription(5, 'PER05',
        getPerCommunicationQualifier(this._segment.getElement(5) as string));
      this.setIdAndDescription(6, 'PER06', 'communication number');
    }
    if (this._segment.getElement(7)) {
      this.setIdAndDescription(7, 'PER07',
        getPerCommunicationQualifier(this._segment.getElement(7) as string));
      this.setIdAndDescription(8, 'PER08', 'communication number');
    }
    if (this._segment.getElement(9)) {
      this.setIdAndDescription(9, 'PER09',
        getPerCommunicationQualifier(this._segment.getElement(9) as string));
      this.setIdAndDescription(10, 'PER10', 'communication number');
    }
  }
}
