import { N3Builder } from './n3-builder';
import {Segment} from '@edi/segment';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';

describe('N3Builder', () => {
  let builder: N3Builder;
  let segment: Segment;
  const n3Segment = 'N3*123 Main St*Apt # 34~';
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    builder = new N3Builder(n3Segment, delimiters);
    segment = builder.getSegment();
  });

  it('should create an instance', () => {
    expect(builder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'N3\' in element 0', () => {
      expect(segment.getElement(0)).toEqual('N3');
    });

    it('should return \'123 Main St\' in element 1', () => {
      expect(segment.getElement(1)).toEqual('123 Main St');
    });

    it('should return \'Apt # 34\' in element 2', () => {
      expect(segment.getElement(2)).toEqual('Apt # 34');
    });
  });

  describe('check descriptions', () => {
    it('should display \'address information\' for N301', () => {
      expect(segment.getSegmentId(1)).toEqual('N301');
      expect(segment.getDescription(1)).toEqual('address 1');
    });

    it('should display \'address information continuation\' for N302', () => {
      expect(segment.getSegmentId(2)).toEqual('N302');
      expect(segment.getDescription(2)).toEqual('address 2');
    });
  });
});
