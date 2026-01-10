import {RefBuilder} from './ref-builder';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';
import {Segment} from '@edi/segment';

describe('RefBuilder', () => {
  let ref0FBuilder: RefBuilder;
  let ref38Builder: RefBuilder;
  let ref1LBuilder: RefBuilder;
  let segment0F: Segment;
  let segment38: Segment;
  let segment1L: Segment;
  const ref0F = 'REF*0F*GROUP123~';
  const ref1L = 'REF*1L*GROUP123~';
  const ref38 = 'REF*38*GROUP123~';
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    ref0FBuilder = new RefBuilder(ref0F, delimiters);
    ref38Builder = new RefBuilder(ref38, delimiters);
    ref1LBuilder = new RefBuilder(ref1L, delimiters);
    segment0F = ref0FBuilder.getSegment();
    segment38 = ref38Builder.getSegment();
    segment1L = ref1LBuilder.getSegment();
  });

  it('should create an instance', () => {
    expect(ref38Builder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'REF\' in element 0', () => {
      expect(segment38.getElement(0)).toEqual('REF');
    });

    it('should return \'38\' in element 1', () => {
      expect(segment38.getElement(1)).toEqual('38');
    });

    it('should return \'GROUP123\' in element 2', () => {
      expect(segment38.getElement(2)).toEqual('GROUP123');
    });
  });

  describe('check descriptions', () => {
    describe('for REF*0F', () => {
      it('should display \'reference identifier code\' for REF01', () => {
        expect(segment0F.getSegmentId(1)).toEqual('REF01');
        expect(segment0F.getDescription(1)).toEqual('contract number');
      });

      it('should display \'reference identification\' for REF02', () => {
        expect(segment0F.getSegmentId(2)).toEqual('REF02');
        expect(segment0F.getDescription(2)).toEqual('contract number');
      });
    });

    describe('for REF*38', () => {
      it('should display \'reference identifier code\' for REF01', () => {
        expect(segment38.getSegmentId(1)).toEqual('REF01');
        expect(segment38.getDescription(1)).toEqual('group');
      });

      it('should display \'reference identification\' for REF02', () => {
        expect(segment38.getSegmentId(2)).toEqual('REF02');
        expect(segment38.getDescription(2)).toEqual('group number');
      });
    });

    describe('for REF*1L', () => {
      it('should display \'reference identifier code\' for REF01', () => {
        expect(segment1L.getSegmentId(1)).toEqual('REF01');
        expect(segment1L.getDescription(1)).toEqual('sub plan');
      });

      it('should display \'reference identification\' for REF02', () => {
        expect(segment1L.getSegmentId(2)).toEqual('REF02');
        expect(segment1L.getDescription(2)).toEqual('sub plan ID');
      });
    });
  })
});
