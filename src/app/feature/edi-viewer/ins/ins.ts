import {Component, input, OnInit} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';

@Component({
  selector: 'prb-ins',
  imports: [
    ElementDescription
  ],
  templateUrl: './ins.html',
  styleUrls: ['./ins.scss', '../edi-viewer.scss']
})
export class Ins implements OnInit {
  insData = input<string>('INS*Y*18*021*XN*A*E**FT~');
  insElementDelimiter = input<string>('*');
  insSubElementDelimiter = input<string>(':');
  insSegmentDelimiter = input<string>('~');
  insValid = false;
  ins: string[] | undefined;
  ins01Description = [
    { code: 'Y', description: 'subscriber' },
    { code: 'N', description: 'dependent' }
  ];
  ins02Relationship = [
    { code: '01', description: 'child' },
    { code: '02', description: 'spouse' },
    { code: '03', description: 'dependent' },
    { code: '04', description: 'parent' },
    { code: '05', description: 'grandparent' },
    { code: '06', description: 'sibling' },
    { code: '07', description: 'other family member' },
    { code: '18', description: 'self' }
  ];
  ins03TransactionTypeCode = [
    { code: '001', description: 'change' },
    { code: '021', description: 'add' },
    { code: '024', description: 'terminate' },
    { code: '025', description: 'reinstate' },
    { code: '030', description: 'replace' }
  ];
  ins04MaintenanceReasonCode = [
    { code: 'XN', description: 'new enrollment' }
  ];
  ins05BenefitStatusCode = [
    { code: 'A', description: 'active' },
    { code: 'T', description: 'terminated' }
  ]
  ins06PlanTypeCode = [
    { code: 'A', description: 'medicare A' },
    { code: 'B', description: 'medicare B' },
    { code: 'C', description: 'medicare C' }
  ]
  ins07QualifyingStatusCode = [
    { code: 'A', description: 'active' },
    { code: 'C', description: 'COBRA' },
    { code: 'S', description: 'surviving spouse' },
  ]
  ins08EmploymentStatusCode = [
    { code: 'EMP', description: 'employed' },
    { code: 'AC', description: 'active' },
    { code: 'RT', description: 'retired' },
    { code: 'LI', description: 'leave of absence' },
  ]
  ins10DisabledStatusCode = [
    { code: 'Y', description: 'disabled' }
  ]

  ngOnInit() {
    const insSegmentLength = this.insData().length;
    this.ins = this.insData().substring(0, insSegmentLength).split(this.insElementDelimiter());
    this.insValid = true;
  }

  getInsElementDelimiter() {
    return this.insElementDelimiter();
  }

  getInsLength() {
    if (!this.ins) return 0;
    return this.ins.length;
  }

  getInsElement(index: number) {
    return this.ins![index];
  }

  getIns01Description(code: string) {
    return this.ins01Description.find(x => x.code === code);
  }

  getIns02Relationship(code: string) {
    return this.ins02Relationship.find(x => x.code === code);
  }

  getIns03TransactionTypeCode(code: string) {
    return this.ins03TransactionTypeCode.find(x => x.code === code);
  }

  getIns04MaintenanceReasonCode(code: string) {
    return this.ins04MaintenanceReasonCode.find(x => x.code === code);
  }

  getIns05BenefitStatusCode(code: string) {
    return this.ins05BenefitStatusCode.find(x => x.code === code);
  }

  getIns06PlanTypeCode(code: string) {
    return this.ins06PlanTypeCode.find(x => x.code === code);
  }

  getIns07QualifyingStatusCode(code: string) {
    return this.ins07QualifyingStatusCode.find(x => x.code === code);
  }

  getIns08EmploymentStatusCode(code: string) {
    return this.ins08EmploymentStatusCode.find(x => x.code === code);
  }

  getIns10DisabledStatusCode(code: string) {
    return this.ins10DisabledStatusCode.find(x => x.code === code);
  }
}
