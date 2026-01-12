import {Component} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {Segment} from '../segment/segment';
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

@Component({
  selector: 'prb-ins',
  imports: [
    ElementDescription
  ],
  templateUrl: './ins.html',
  styleUrls: ['./ins.scss', '../edi-viewer.scss']
})
export class Ins extends Segment {
  constructor() {
    super();
  }

  override init() {
    super.init();
    this.valid = true;
  }

  protected readonly getIns01Description = getIns01Description;
  protected readonly getIns02Relationship = getIns02Relationship;
  protected readonly getIns03TransactionTypeCode = getIns03TransactionTypeCode;
  protected readonly getIns04MaintenanceReasonCode = getIns04MaintenanceReasonCode;
  protected readonly getIns05BenefitStatusCode = getIns05BenefitStatusCode;
  protected readonly getIns06PlanTypeCode = getIns06PlanTypeCode;
  protected readonly getIns07QualifyingStatusCode = getIns07QualifyingStatusCode;
  protected readonly getIns08EmploymentStatusCode = getIns08EmploymentStatusCode;
  protected readonly getIns10DisabledStatusCode = getIns10DisabledStatusCode;
}
