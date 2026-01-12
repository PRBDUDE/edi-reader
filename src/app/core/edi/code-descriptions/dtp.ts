const dtp01DateType = [
  {code: '001', description: 'cancel after date'},
  {code: '007', description: 'effective date'},
  {code: '011', description: 'ship date'},
  {code: '291', description: 'plan date'},
  {code: '307', description: 'eligibility date'},
  {code: '336', description: 'employment begin date'},
  {code: '337', description: 'employment end date'},
  {code: '347', description: 'plan issue date'},
  {code: '348', description: 'benefit start date'},
  {code: '349', description: 'benefit end date'},
  {code: '356', description: 'eligibility begin date'},
  {code: '357', description: 'eligibility end date'},
  {code: '539', description: 'policy effective date'},
  {code: '540',  description: 'policy expiration date'}

]
const dtp02Format = [
  {code: 'D6', description: 'YYMMDD'},
  {code: 'D8', description: 'YYYYMMDD'},
  {code: 'DT', description: 'YYYYMMDDHHMM'},
]

export function getDtpDateType(code: string) {
  return dtp01DateType.find(x => x.code === code)?.description as string;
}

export function getDtp02Format(code: string) {
  return dtp02Format.find(x => x.code === code)?.description as string;
}
