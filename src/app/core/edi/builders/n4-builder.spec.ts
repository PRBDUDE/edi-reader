import { N4Builder } from './n4-builder';
import {N3Builder} from '@edi/builders/n3-builder';
import {Segment} from '@edi/segment';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';

describe('N4Builder', () => {
  let builder: N3Builder;
  let segment: Segment;
  const n4Segment = 'N4*FARMINGTON*CA*90323~';
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    builder = new N4Builder(n4Segment, delimiters);
    segment = builder.getSegment();
  });

  it('should create an instance', () => {
    expect(builder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'N4\' in element 0', () => {
      expect(segment.getElement(0)).toEqual('N4');
    });

    it('should return \'FARMINGTON\' in element 1', () => {
      expect(segment.getElement(1)).toEqual('FARMINGTON');
    });

    it('should return \'CA\' in element 2', () => {
      expect(segment.getElement(2)).toEqual('CA');
    });

    it('should return \'90323\' in element 3', () => {
      expect(segment.getElement(3)).toEqual('90323');
    });
  });

  describe('check descriptions', () => {
    it('should display \'address information\' for N401', () => {
      expect(segment.getSegmentId(1)).toEqual('N401');
      expect(segment.getDescription(1)).toEqual('city');
    });

    it('should display \'address information continuation\' for N402', () => {
      expect(segment.getSegmentId(2)).toEqual('N402');
      expect(segment.getDescription(2)).toEqual('state code');
    });

    it('should display \'city name\' for N403', () => {
      expect(segment.getSegmentId(3)).toEqual('N403');
      expect(segment.getDescription(3)).toEqual('zip code');
    });
  })
});
