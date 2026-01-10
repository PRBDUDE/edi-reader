import {EdiBuilder} from '@edi/builders/edi-builder';
import {Delimiters} from '@edi/delimiters';

export class DtpBuilder extends EdiBuilder {
  constructor(segment: string, delimiters: Delimiters) {
    super(segment, delimiters);
  }

  override setDescriptions() {
    let dtp01Description = 'date/time qualifier';
    let dtp03Description = 'date';
    if (this._segment.getElement(1) === '007') {
      dtp01Description = 'effective date';
      dtp03Description = dtp01Description;
    } else if (this._segment.getElement(1) === '291') {
      dtp01Description = 'plan date';
      dtp03Description = dtp01Description;
    } else if (this._segment.getElement(1) === '307') {
      dtp01Description = 'eligibility date';
      dtp03Description = dtp01Description;
    } else if (this._segment.getElement(1) === '336') {
      dtp01Description = 'employment begin date';
      dtp03Description = dtp01Description;
    } else if (this._segment.getElement(1) === '337') {
      dtp01Description = 'employment end date';
      dtp03Description = dtp01Description;
    } else if (this._segment.getElement(1) === '346') {
      dtp01Description = 'plan begin date';
      dtp03Description = dtp01Description;
    } else if (this._segment.getElement(1) === '347') {
      dtp01Description = 'plan end date';
      dtp03Description = dtp01Description;
    } else if (this._segment.getElement(1) === '348') {
      dtp01Description = 'benefit begin date';
      dtp03Description = dtp01Description;
    } else if (this._segment.getElement(1) === '349') {
      dtp01Description = 'benefit end date';
      dtp03Description = dtp01Description;
    } else if (this._segment.getElement(1) === '356') {
      dtp01Description = 'eligibility begin date';
      dtp03Description = dtp01Description;
    } else if (this._segment.getElement(1) === '357') {
      dtp01Description = 'eligibility end date';
      dtp03Description = dtp01Description;
    } else if (this._segment.getElement(1) === '539') {
      dtp01Description = 'policy effective date';
      dtp03Description = dtp01Description;
    } else if (this._segment.getElement(1) === '540') {
      dtp01Description = 'policy expiration date';
      dtp03Description = dtp01Description;
    }
    this.setIdAndDescription(1, 'DTP01', dtp01Description);
    let dtp02Description = 'date/time format qualifier';
    if (this._segment.getElement(2) === 'D8') {
      dtp02Description = 'date format (YYYYMMDD)';
    } else if (this._segment.getElement(2) === 'DT') {
      dtp02Description = 'date/time format (YYYYMMDDHHMM)';
    }
    this.setIdAndDescription(2, 'DTP02', dtp02Description);
    this.setIdAndDescription(3, 'DTP03', dtp03Description);
  }
}
