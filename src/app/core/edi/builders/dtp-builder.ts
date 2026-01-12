import {EdiBuilder} from '@edi/builders/edi-builder';
import {Delimiters} from '@edi/delimiters';
import {getDtpDateType, getDtp02Format} from '@edi/code-descriptions/dtp';

export class DtpBuilder extends EdiBuilder {
  constructor(segment: string, delimiters: Delimiters) {
    super(segment, delimiters);
  }

  override setDescriptions() {
    this.setIdAndDescription(1, 'DTP01',
      getDtpDateType(this._segment.getElement(1) as string));
    this.setIdAndDescription(2, 'DTP02',
      getDtp02Format(this._segment.getElement(2) as string));
    this.setIdAndDescription(3, 'DTP03',
      getDtpDateType(this._segment.getElement(1) as string));
  }
}
