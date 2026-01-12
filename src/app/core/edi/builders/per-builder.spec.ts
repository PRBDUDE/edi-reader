import { PerBuilder } from './per-builder';
import {Segment} from '@edi/segment';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';

describe('PerBuilder', () => {
  let builder: PerBuilder;
  let segment: Segment;
  const per = 'PER*IP*JANE DOE*HP*5551234567~'
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    builder = new PerBuilder(per, delimiters);
    segment = builder.getSegment();
  });

  it('should create an instance', () => {
    expect(builder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'PER\' in element 0', () => {
      expect(segment.getElement(0)).toEqual('PER');
    })
  })
});
