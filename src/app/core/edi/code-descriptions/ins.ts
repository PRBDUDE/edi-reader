const ins01Description = [
  {code: 'Y', description: 'subscriber'},
  {code: 'N', description: 'dependent'}
];
const ins02Relationship = [
  {code: '01', description: 'child'},
  {code: '02', description: 'spouse'},
  {code: '03', description: 'dependent'},
  {code: '04', description: 'parent'},
  {code: '05', description: 'grandparent'},
  {code: '06', description: 'sibling'},
  {code: '07', description: 'other family member'},
  {code: '18', description: 'self'}
];
const ins03TransactionTypeCode = [
  {code: '001', description: 'change'},
  {code: '021', description: 'add'},
  {code: '024', description: 'terminate'},
  {code: '025', description: 'reinstate'},
  {code: '030', description: 'replace'}
];
const ins04MaintenanceReasonCode = [
  {code: 'XN', description: 'new enrollment'}
];
const ins05BenefitStatusCode = [
  {code: 'A', description: 'active'},
  {code: 'T', description: 'terminated'}
];
const ins06PlanTypeCode = [
  {code: 'A', description: 'medicare A'},
  {code: 'B', description: 'medicare B'},
  {code: 'C', description: 'medicare C'}
];
const ins07QualifyingStatusCode = [
  {code: 'A', description: 'active'},
  {code: 'C', description: 'COBRA'},
  {code: 'S', description: 'surviving spouse'},
];
const ins08EmploymentStatusCode = [
  {code: 'EMP', description: 'employed'},
  {code: 'AC', description: 'active'},
  {code: 'RT', description: 'retired'},
  {code: 'LI', description: 'leave of absence'},
];
const ins10DisabledStatusCode = [
  {code: 'Y', description: 'disabled'}
];

export function getIns01Description(code: string) {
  return ins01Description
    .find(x => x.code === code)?.description as string;
}

export function getIns02Relationship(code: string) {
  return ins02Relationship
    .find(x => x.code === code)?.description as string;
}

export function getIns03TransactionTypeCode(code: string) {
  return ins03TransactionTypeCode
    .find(x => x.code === code)?.description as string;
}

export function getIns04MaintenanceReasonCode(code: string) {
  return ins04MaintenanceReasonCode
    .find(x => x.code === code)?.description as string;
}

export function getIns05BenefitStatusCode(code: string) {
  return ins05BenefitStatusCode
    .find(x => x.code === code)?.description as string;
}

export function getIns06PlanTypeCode(code: string) {
  return ins06PlanTypeCode
    .find(x => x.code === code)?.description as string;
}

export function getIns07QualifyingStatusCode(code: string) {
  return ins07QualifyingStatusCode
    .find(x => x.code === code)?.description as string;
}

export function getIns08EmploymentStatusCode(code: string) {
  return ins08EmploymentStatusCode
    .find(x => x.code === code)?.description as string;
}

export function getIns10DisabledStatusCode(code: string) {
  return ins10DisabledStatusCode
    .find(x => x.code === code)?.description as string;
}
