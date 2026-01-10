import {Delimiters} from '@edi/delimiters';

export function getTestEdiDelimiters() {
  const isaSegment = 'ISA*00*          *00*          *ZZ*87790056      *ZZ*576687090     *251107*1430*^*00501*000000905*0*T*:~';
  return new Delimiters(isaSegment);
}
