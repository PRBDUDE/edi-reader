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
    { code: '021', description: 'add' },
    { code: '024', description: 'cancellation' }
  ];
  ins04MaintenanceReasonCode = [
    { code: 'XN', description: 'new enrollment' }
  ];
  ins05BenefitStatusCode = [
    { code: 'A', description: 'active' },
    { code: 'T', description: 'terminated' }
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
}
