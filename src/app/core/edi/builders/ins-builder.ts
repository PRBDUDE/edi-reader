import {EdiBuilder} from '@edi/builders/edi-builder';
import {Delimiters} from '@edi/delimiters';
import {
  getIns01Description,
  getIns02Relationship,
  getIns03TransactionTypeCode,
  getIns04MaintenanceReasonCode,
  getIns05BenefitStatusCode,
  getIns06PlanTypeCode,
  getIns07QualifyingStatusCode,
  getIns08EmploymentStatusCode,
  getIns10DisabledStatusCode
} from '@edi/code-descriptions/ins';

export class InsBuilder extends EdiBuilder {
  constructor(segment: string, delimiters: Delimiters) {
    super(segment, delimiters, 'INS');
  }

  override setDescriptions() {
    this.setIdAndDescription(1, 'INS01',
      getIns01Description(this._segment.getElement(1) as string));
    this.setIdAndDescription(2, 'INS02',
      getIns02Relationship(this._segment.getElement(2) as string));
    this.setIdAndDescription(3, 'INS03',
      getIns03TransactionTypeCode(this._segment.getElement(3) as string));
    this.setIdAndDescription(4, 'INS04',
      getIns04MaintenanceReasonCode(this._segment.getElement(4) as string));
    this.setIdAndDescription(5, 'INS05',
      getIns05BenefitStatusCode(this._segment.getElement(5) as string));
    this.setIdAndDescription(6, 'INS06',
      getIns06PlanTypeCode(this._segment.getElement(6) as string));
    const ins07 = this._segment.getElement(7);
    if (ins07) {
      this.setIdAndDescription(7, 'INS07',
        getIns07QualifyingStatusCode(ins07));
    }
    const ins08 = this._segment.getElement(8);
    if (ins08) {
      this.setIdAndDescription(8, 'INS08',
        getIns08EmploymentStatusCode(ins08));
    }
    const ins10 = this._segment.getElement(10);
    if (ins10) {
      this.setIdAndDescription(10, 'INS10',
        getIns10DisabledStatusCode(ins10 as string));
    }
  }
}
