import { N1Builder } from './n1-builder';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';
import {Segment} from '@edi/segment';

describe('N1Builder', () => {
  let n1P5Builder: N1Builder;
  let n1INBuilder: N1Builder;
  let segmentP5: Segment;
  let segmentIN: Segment;
  const n1P5Segment = 'N1*P5*ACME EMPLOYER~';
  const n1INSegment = 'N1*IN*ALPHA HEALTH PLAN~';
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    n1P5Builder = new N1Builder(n1P5Segment, delimiters);
    n1INBuilder = new N1Builder(n1INSegment, delimiters);
    segmentP5 = n1P5Builder.getSegment();
    segmentIN = n1INBuilder.getSegment();
  })

  it('should create an instance', () => {
    expect(n1P5Segment).toBeTruthy();
    expect(n1INSegment).toBeTruthy();
  });

  describe('check elements', () => {
    beforeEach(() => {
      segmentP5 = n1P5Builder.getSegment();
    })

    it('should return \'N1\' in element 0', () => {
      expect(segmentP5.getElement(0)).toEqual('N1');
    });

    it('should return \'P5\' in element 1', () => {
      expect(segmentP5.getElement(1)).toEqual('P5');
    });

    it('should return \'ACME EMPLOYER\' in element 2', () => {
      expect(segmentP5.getElement(2)).toEqual('ACME EMPLOYER');
    });
  });

  describe('check descriptions', () => {
    describe('for N1*P5', () => {
      it('should display \'entity identifier code\' for N101', () => {
        expect(segmentP5.getSegmentId(1)).toEqual('N101');
        expect(segmentP5.getDescription(1)).toEqual('entity identifier code');
      });

      it('should display \'entity name\' for N102', () => {
        expect(segmentP5.getSegmentId(2)).toEqual('N102');
        expect(segmentP5.getDescription(2)).toEqual('identification code qualifier');
      });
    });

    describe('for N1*IN', () => {
      it('should display \'entity identifier code\' for N101', () => {
        expect(segmentIN.getSegmentId(1)).toEqual('N101');
        expect(segmentIN.getDescription(1)).toEqual('entity identifier code');
      });

      it('should display \'entity name\' for N102', () => {
        expect(segmentIN.getSegmentId(2)).toEqual('N102');
        expect(segmentIN.getDescription(2)).toEqual('identification code qualifier');
      })
    });
  });
});
