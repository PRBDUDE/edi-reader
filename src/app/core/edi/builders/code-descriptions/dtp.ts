const dtp01DateType = [
  {code: '001', description: 'cancel after date'},
  {code: '007', description: 'effective date'},
  {code: '011', description: 'ship date'},
  {code: '336', description: 'employment begin date'},
  {code: '346', description: 'plan issue date'},
  {code: '348', description: 'benefit start date'},
  {code: '349', description: 'benefit end date'},
]
const dtp02Format = [
  {code: 'D6', description: 'YYMMDD'},
  {code: 'D8', description: 'YYYYMMDD'},
  {code: 'DT', description: 'YYYYMMDDHHMM'},
]

export function getDtpDateType(code: string) {
  return dtp01DateType.find(x => x.code === code)?.description as string;
}

export function getDtpFormat(code: string) {
  return this.dtp02Format.find(x => x.code === code).description as string;
}
