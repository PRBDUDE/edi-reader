const refCodeDescription = [
  {code: '0F', description: 'Contract Number'},
  {code: '38', description: 'Group ID'},
]

export function getRefCodeDescription(code: string) {
  return refCodeDescription.find(x => x.code === code)?.description as string;
}
