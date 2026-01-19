import {BgnBuilder} from './bgn-builder';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';
import {Segment} from '@edi/segment';

describe('BgnBuilder', () => {
  let bgnBuilderShort: BgnBuilder;
  let bgnBuilderFull: BgnBuilder;
  let segment: Segment;
  const bgnSegmentShort = 'BGN*00*723456*20251107*1430~';
  const bgnSegmentFull = 'BGN*00*123456*20260107*1430*-5*34*RT~';
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    bgnBuilderShort = new BgnBuilder(bgnSegmentShort, delimiters);
    bgnBuilderFull = new BgnBuilder(bgnSegmentFull, delimiters);
  });

  describe('test short BGN segment', () => {
    beforeEach(() => {
      segment = bgnBuilderShort.getSegment();
    });

    it('should create an instance', () => {
      expect(bgnBuilderShort).toBeTruthy();
    });

    describe('check elements', () => {
      it('should return \'BGN\' in element 0', () => {
        expect(segment.getElement(0)).toEqual('BGN');
      });

      it('should return \'00\' in element 1', () => {
        expect(segment.getElement(1)).toEqual('00');
      });

      it('should return \'723456\' in element 2', () => {
        expect(segment.getElement(2)).toEqual('723456');
      });

      it('should return \'20251107\' in element 3', () => {
        expect(segment.getElement(3)).toEqual('20251107');
      });

      it('should return \'1430\' in element 4', () => {
        expect(segment.getElement(4)).toEqual('1430');
      });
    });

    describe('check descriptions', () => {
      it('should display \'transaction set purpose code\' for BGN01', () => {
        expect(segment.getSegmentId(1)).toEqual('BGN01');
        expect(segment.getDescription(1)).toEqual('transaction set purpose code');
      });

      it('should display \'control number for the transaction set\' for BGN02', () => {
        expect(segment.getSegmentId(2)).toEqual('BGN02');
        expect(segment.getDescription(2)).toEqual('control number for the transaction set');
      });

      it('should display \'transaction set creation date (YYYYMMDD)\' for BGN03', () => {
        expect(segment.getSegmentId(3)).toEqual('BGN03');
        expect(segment.getDescription(3)).toEqual('transaction set creation date (YYYYMMDD)');
      });

      it('should display \'transaction set creation time (HHMM)\' for BGN04', () => {
        expect(segment.getSegmentId(4)).toEqual('BGN04');
        expect(segment.getDescription(4)).toEqual('transaction set creation time (HHMM)');
      });
    });
  });

  describe('test full BGN segment', () => {
    let segment: Segment;

    beforeEach(() => {
      segment = bgnBuilderFull.getSegment();
    });

    it('should create an instance', () => {
      expect(bgnBuilderFull).toBeTruthy();
    });

    describe('check elements', () => {
      it('should return \'BGN\' in element 0', () => {
        expect(segment.getElement(0)).toEqual('BGN');
      });

      it('should return \'00\' in element 1', () => {
        expect(segment.getElement(1)).toEqual('00');
      });

      it('should return \'123456\' in element 2', () => {
        expect(segment.getElement(2)).toEqual('123456');
      });

      it('should return \'20260107\' in element 3', () => {
        expect(segment.getElement(3)).toEqual('20260107');
      });

      it('should return \'1430\' in element 4', () => {
        expect(segment.getElement(4)).toEqual('1430');
      });

      it('should return \'-5\' in element 5', () => {
        expect(segment.getElement(5)).toEqual('-5');
      });

      it('should return \'34\' in element 6', () => {
        expect(segment.getElement(6)).toEqual('34');
      });

      it('should return \'RT\' in element 7', () => {
        expect(segment.getElement(7)).toEqual('RT');
      });
    });

    describe('check descriptions', () => {
      it('should display \'transaction set purpose code\' for BGN01', () => {
        expect(segment.getSegmentId(1)).toEqual('BGN01');
        expect(segment.getDescription(1)).toEqual('transaction set purpose code');
      });

      it('should display \'control number for the transaction set\' for BGN02', () => {
        expect(segment.getSegmentId(2)).toEqual('BGN02');
        expect(segment.getDescription(2)).toEqual('control number for the transaction set');
      });

      it('should display \'transaction set creation date (YYYYMMDD)\' for BGN03', () => {
        expect(segment.getSegmentId(3)).toEqual('BGN03');
        expect(segment.getDescription(3)).toEqual('transaction set creation date (YYYYMMDD)');
      });

      it('should display \'transaction set creation time (HHMM)\' for BGN04', () => {
        expect(segment.getSegmentId(4)).toEqual('BGN04');
        expect(segment.getDescription(4)).toEqual('transaction set creation time (HHMM)');
      });

      it('should display \'time zone code\' for BGN05', () => {
        expect(segment.getSegmentId(5)).toEqual('BGN05');
        expect(segment.getDescription(5)).toEqual('time zone code');
      });

      it('should display \'reference identification\' for BGN06', () => {
        expect(segment.getSegmentId(6)).toEqual('BGN06');
        expect(segment.getDescription(6)).toEqual('reference identification');
      });

      it('should display \'transaction type code (optional)\' for BGN07', () => {
        expect(segment.getSegmentId(7)).toEqual('BGN07');
        expect(segment.getDescription(7)).toEqual('transaction type code (optional)');
      });
    });
  });
});
