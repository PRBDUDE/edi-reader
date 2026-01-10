import { N1Builder } from './n1-builder';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';
import {Segment} from '@edi/segment';

describe('N1Builder', () => {
  let n1P5Builder: N1Builder;
  let n1INBuilder: N1Builder;
  const n1P5Segment = 'N1*P5*ACME EMPLOYER~';
  const n1INSegment = 'N1*IN*ALPHA HEALTH PLAN~';
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    n1P5Builder = new N1Builder(n1P5Segment, delimiters);
    n1INBuilder = new N1Builder(n1INSegment, delimiters);
  })

  it('should create an instance', () => {
    expect(n1P5Segment).toBeTruthy();
    expect(n1INSegment).toBeTruthy();
  });

  describe('check elements', () => {
    let segment: Segment;

    beforeEach(() => {
      segment = n1P5Builder.getSegment();
    })

    it('should return \'N1\' in element 0', () => {
      expect(segment.getElement(0)).toEqual('N1');
    });

    it('should return \'P5\' in element 1', () => {
      expect(segment.getElement(1)).toEqual('P5');
    });

    it('should return \'ACME EMPLOYER\' in element 2', () => {
      expect(segment.getElement(2)).toEqual('ACME EMPLOYER');
    });
  });

  describe('check descriptions', () => {
    describe('for N1*P5', () => {
      let segment: Segment;

      beforeEach(() => {
        segment = n1P5Builder.getSegment();
      });

      it('should display \'entity identifier code\' for N101', () => {
        expect(segment.getSegmentId(1)).toEqual('N101');
        expect(segment.getDescription(1)).toEqual('entity identifier code');
      });

      it('should display \'entity name\' for N102', () => {
        expect(segment.getSegmentId(2)).toEqual('N102');
        expect(segment.getDescription(2)).toEqual('entity name');
      });
    });

    describe('for N1*IN', () => {
      let segment: Segment;

      beforeEach(() => {
        segment = n1INBuilder.getSegment();
      });

      it('should display \'entity identifier code\' for N101', () => {
        expect(segment.getSegmentId(1)).toEqual('N101');
        expect(segment.getDescription(1)).toEqual('entity identifier code');
      });

      it('should display \'entity name\' for N102', () => {
        expect(segment.getSegmentId(2)).toEqual('N102');
        expect(segment.getDescription(2)).toEqual('entity name');
      })
    });
  });
});
