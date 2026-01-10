import { DtpBuilder } from './dtp-builder';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';

describe('DtpBuilder', () => {
  let dtpBuilder: DtpBuilder;
  const dtp007Segment = 'DTP*007*D8*20230124~';
  const dtp291Segment = 'DTP*291*D8*20230124~';
  const delimiter = getTestEdiDelimiters();

  beforeEach(() => {
    dtpBuilder = new DtpBuilder(dtp007Segment, delimiter);
  })

  it('should create an instance', () => {
    expect(dtpBuilder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'DTP\' in element 0', () => {
      expect(dtpBuilder.getSegment().getElement(0)).toEqual('DTP');
    });

    it('should return \'007\' in element 1', () => {
      expect(dtpBuilder.getSegment().getElement(1)).toEqual('007');
    });

    it('should return \'D8\' in element 2', () => {
      expect(dtpBuilder.getSegment().getElement(2)).toEqual('D8');
    });

    it('should return \'20230124\' in element 3', () => {
      expect(dtpBuilder.getSegment().getElement(3)).toEqual('20230124');
    });
  });

  describe('check descriptions for DTP*007', () => {
    beforeEach(() => {
      dtpBuilder = new DtpBuilder(dtp007Segment, delimiter);
    });

    it('should display \'date/time qualifier\' for DTP01', () => {
      expect(dtpBuilder.getSegment().getSegmentId(1)).toEqual('DTP01');
      expect(dtpBuilder.getSegment().getDescription(1)).toEqual('effective date');
    });

    it('should display \'date format qualifier\' for DTP02', () => {
      expect(dtpBuilder.getSegment().getSegmentId(2)).toEqual('DTP02');
      expect(dtpBuilder.getSegment().getDescription(2)).toEqual('date format (YYYYMMDD)');
    });

    it('should display \'effective date\' for DTP03', () => {
      expect(dtpBuilder.getSegment().getSegmentId(3)).toEqual('DTP03');
      expect(dtpBuilder.getSegment().getDescription(3)).toEqual('effective date');
    });
  });

  describe('check descriptions for DTP*291', () => {
    beforeEach(() => {
      dtpBuilder = new DtpBuilder(dtp291Segment, delimiter);
    });

    it('should display \'date/time qualifier\' for DTP01', () => {
      expect(dtpBuilder.getSegment().getSegmentId(1)).toEqual('DTP01');
      expect(dtpBuilder.getSegment().getDescription(1)).toEqual('plan date');
    });

    it('should display \'date format qualifier\' for DTP02', () => {
      expect(dtpBuilder.getSegment().getSegmentId(2)).toEqual('DTP02');
      expect(dtpBuilder.getSegment().getDescription(2)).toEqual('date format (YYYYMMDD)');
    });

    it('should display \'plan date\' for DTP03', () => {
      expect(dtpBuilder.getSegment().getSegmentId(3)).toEqual('DTP03');
      expect(dtpBuilder.getSegment().getDescription(3)).toEqual('plan date');
    });
  })
});
