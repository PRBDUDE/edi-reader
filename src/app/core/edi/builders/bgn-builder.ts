import {EdiBuilder} from '@edi/builders/edi-builder';
import {Delimiters} from '@edi/delimiters';

export class BgnBuilder extends EdiBuilder {
  constructor(segment: string, delimiters: Delimiters) {
    super(segment, delimiters);
  }

  override setDescriptions() {
    this.setIdAndDescription(1, 'BGN01', 'transaction set purpose code');
    this.setIdAndDescription(2, 'BGN02', 'control number for the transaction set');
    this.setIdAndDescription(3, 'BGN03', 'transaction set creation date (YYYYMMDD)');
    this.setIdAndDescription(4, 'BGN04', 'transaction set creation time (HHMM)');
    this.setIdAndDescription(5, 'BGN05', 'time zone code');
    this.setIdAndDescription(6, 'BGN06', 'reference identification');
    this.setIdAndDescription(7, 'BGN07', 'transaction type code (optional)');
  }
}
