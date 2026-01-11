const perCommunicationQualifier = [
  { code: 'AP', description: 'alternate phone' },
  { code: 'CP', description: 'cell phone' },
  { code: 'EM', description: 'electronic mail' },
  { code: 'HP', description: 'home phone' },
  { code: 'TE', description: 'telephone' },
];

export function getPerCommunicationQualifier(code: string) {
  return perCommunicationQualifier.find(qualifier => qualifier.code === code)?.description as string;
}
