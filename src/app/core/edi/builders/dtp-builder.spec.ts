import {DtpBuilder} from './dtp-builder';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';
import {Segment} from '@edi/segment';

describe('DtpBuilder', () => {
  let dtp007Builder: DtpBuilder;
  let dtp291Builder: DtpBuilder;
  let segment: Segment;
  const dtp007Segment = 'DTP*007*D8*20230124~';
  const dtp291Segment = 'DTP*291*D8*20230124~';
  const delimiter = getTestEdiDelimiters();

  beforeEach(() => {
    dtp007Builder = new DtpBuilder(dtp007Segment, delimiter);
    dtp291Builder = new DtpBuilder(dtp291Segment, delimiter);
  })

  describe('check dtp007', () => {
    beforeEach(() => {
      segment = dtp007Builder.getSegment();
    })

    it('should create an instance', () => {
      expect(dtp007Builder).toBeTruthy();
    });

    describe('check elements', () => {
      it('should return \'DTP\' in element 0', () => {
        expect(segment.getElement(0)).toEqual('DTP');
      });

      it('should return \'007\' in element 1', () => {
        expect(segment.getElement(1)).toEqual('007');
      });

      it('should return \'D8\' in element 2', () => {
        expect(segment.getElement(2)).toEqual('D8');
      });

      it('should return \'20230124\' in element 3', () => {
        expect(segment.getElement(3)).toEqual('20230124');
      });
    });

    describe('check descriptions for DTP*007', () => {
      it('should display \'date/time qualifier\' for DTP01', () => {
        expect(segment.getSegmentId(1)).toEqual('DTP01');
        expect(segment.getDescription(1)).toEqual('effective date');
      });

      it('should display \'date format qualifier\' for DTP02', () => {
        expect(segment.getSegmentId(2)).toEqual('DTP02');
        expect(segment.getDescription(2)).toEqual('date format (YYYYMMDD)');
      });

      it('should display \'effective date\' for DTP03', () => {
        expect(segment.getSegmentId(3)).toEqual('DTP03');
        expect(segment.getDescription(3)).toEqual('effective date');
      });
    });
  });

  describe('check descriptions for DTP*291', () => {
    beforeEach(() => {
      segment = dtp291Builder.getSegment();
    });

    it('should display \'date/time qualifier\' for DTP01', () => {
      expect(segment.getSegmentId(1)).toEqual('DTP01');
      expect(segment.getDescription(1)).toEqual('plan date');
    });

    it('should display \'date format qualifier\' for DTP02', () => {
      expect(segment.getSegmentId(2)).toEqual('DTP02');
      expect(segment.getDescription(2)).toEqual('date format (YYYYMMDD)');
    });

    it('should display \'plan date\' for DTP03', () => {
      expect(segment.getSegmentId(3)).toEqual('DTP03');
      expect(segment.getDescription(3)).toEqual('plan date');
    });
  })
});
