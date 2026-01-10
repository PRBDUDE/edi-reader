import {RefBuilder} from './ref-builder';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';

describe('RefBuilder', () => {
  let ref0FBuilder: RefBuilder;
  let ref38Builder: RefBuilder;
  let ref1LBuilder: RefBuilder;
  const ref0F = 'REF*0F*GROUP123~';
  const ref1L = 'REF*1L*GROUP123~';
  const ref38 = 'REF*38*GROUP123~';
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    ref38Builder = new RefBuilder(ref38, delimiters);
    ref0FBuilder = new RefBuilder(ref0F, delimiters);
    ref1LBuilder = new RefBuilder(ref1L, delimiters);
  });

  it('should create an instance', () => {
    expect(ref38Builder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'REF\' in element 0', () => {
      expect(ref38Builder.getSegment().getElement(0)).toEqual('REF');
    });

    it('should return \'38\' in element 1', () => {
      expect(ref38Builder.getSegment().getElement(1)).toEqual('38');
    });

    it('should return \'GROUP123\' in element 2', () => {
      expect(ref38Builder.getSegment().getElement(2)).toEqual('GROUP123');
    });
  });

  describe('check descriptions', () => {
    describe('for REF*0F', () => {
      it('should display \'reference identifier code\' for REF01', () => {
        expect(ref0FBuilder.getSegment().getSegmentId(1)).toEqual('REF01');
        expect(ref0FBuilder.getSegment().getDescription(1)).toEqual('contract number');
      });

      it('should display \'reference identification\' for REF02', () => {
        expect(ref0FBuilder.getSegment().getSegmentId(2)).toEqual('REF02');
        expect(ref0FBuilder.getSegment().getDescription(2)).toEqual('contract number');
      });
    });

    describe('for REF*38', () => {
      it('should display \'reference identifier code\' for REF01', () => {
        expect(ref38Builder.getSegment().getSegmentId(1)).toEqual('REF01');
        expect(ref38Builder.getSegment().getDescription(1)).toEqual('group');
      });

      it('should display \'reference identification\' for REF02', () => {
        expect(ref38Builder.getSegment().getSegmentId(2)).toEqual('REF02');
        expect(ref38Builder.getSegment().getDescription(2)).toEqual('group number');
      });
    });

    describe('for REF*1L', () => {
      it('should display \'reference identifier code\' for REF01', () => {
        expect(ref1LBuilder.getSegment().getSegmentId(1)).toEqual('REF01');
        expect(ref1LBuilder.getSegment().getDescription(1)).toEqual('sub plan');
      });

      it('should display \'reference identification\' for REF02', () => {
        expect(ref1LBuilder.getSegment().getSegmentId(2)).toEqual('REF02');
        expect(ref1LBuilder.getSegment().getDescription(2)).toEqual('sub plan ID');
      });
    });
  })
});
