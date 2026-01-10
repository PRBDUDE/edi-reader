import {EdiBuilder} from '@edi/builders/edi-builder';
import {Delimiters} from '@edi/delimiters';

export class GsBuilder extends EdiBuilder {

  constructor(segment: string, delimiters: Delimiters) {
    super(segment, delimiters);
  }

  override setDescriptions() {
    this.setIdAndDescription(1, 'GS01', 'functional identifier code');
    this.setIdAndDescription(2, 'GS02', 'application senders code');
    this.setIdAndDescription(3, 'GS03', 'application receivers code');
    this.setIdAndDescription(4, 'GS04', 'date the group was built (YYYYMMDD)');
    this.setIdAndDescription(5, 'GS05', 'time the group was built (HHMM)');
    this.setIdAndDescription(6, 'GS06', 'control number');
    this.setIdAndDescription(7, 'GS07', 'responsible agency code');
    this.setIdAndDescription(8, 'GS08', 'version release / inquiry');
  }
}
