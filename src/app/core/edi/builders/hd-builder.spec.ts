import { HdBuilder } from './hd-builder';
import {Segment} from '@edi/segment';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';

describe('HdBuilder', () => {
  let hdBuilder: HdBuilder;
  let segment: Segment;
  const hdSegment = 'HD*030**HLT*PLAN123*3~';
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    hdBuilder = new HdBuilder(hdSegment, delimiters);
    segment = hdBuilder.getSegment();
  });

  it('should create an instance', () => {
    expect(hdBuilder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'HD\' in element 0', () => {
      expect(segment.getElement(0)).toEqual('HD');
    });

    it('should return \'030\' in element 1', () => {
      expect(segment.getElement(1)).toEqual('030');
    });

    it('should return \'HLT\' in element 3', () => {
      expect(segment.getElement(3)).toEqual('HLT');
    });

    it('should return \'PLAN123\' in element 4', () => {
      expect(segment.getElement(4)).toEqual('PLAN123');
    });

    it('should return \'3\' in element 5', () => {
      expect(segment.getElement(5)).toEqual('3');
    });
  });

  describe('check descriptions', () => {
    it('should display \'maintenance type code\' for HD01', () => {
      expect(segment.getSegmentId(1)).toEqual('HD01');
      expect(segment.getDescription(1)).toEqual('maintenance type code');
    });

    it('should display \'insurance line code\' for HD03', () => {
      expect(segment.getSegmentId(3)).toEqual('HD03');
      expect(segment.getDescription(3)).toEqual('insurance line code');
    });

    it('should display \'plan coverage description\' for HD04', () => {
      expect(segment.getSegmentId(4)).toEqual('HD04');
      expect(segment.getDescription(4)).toEqual('plan coverage description');
    });

    it('should display \'coverage level code\' for HD05', () => {
      expect(segment.getSegmentId(5)).toEqual('HD05');
      expect(segment.getDescription(5)).toEqual('coverage level code');
    });
  })
});
