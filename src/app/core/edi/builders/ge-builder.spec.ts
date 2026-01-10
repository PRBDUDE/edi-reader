import {GeBuilder} from './ge-builder';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';
import {Segment} from '@edi/segment';

describe('GeBuilder', () => {
  let geBuilder: GeBuilder;
  let segment: Segment;
  const geSegment = 'GE*2*1~';
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    geBuilder = new GeBuilder(geSegment, delimiters);
    segment = geBuilder.getSegment();
  });

  it('should create an instance', () => {
    expect(geBuilder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'GE\' in element 0', () => {
      expect(segment.getElement(0)).toEqual('GE');
    });

    it('should return \'2\' in element 1', () => {
      expect(segment.getElement(1)).toEqual('2');
    });

    it('should return \'1\' in element 2', () => {
      expect(segment.getElement(2)).toEqual('1');
    });
  });

  describe('check descriptions', () => {
    it('should display \'number of transaction sets\' for GE01', () => {
      expect(segment.getSegmentId(1)).toEqual('GE01');
      expect(segment.getDescription(1)).toEqual('number of transaction sets');
    });

    it('should display \'control group number (must match GS06)\' for GE02', () => {
      expect(segment.getSegmentId(2)).toEqual('GE02');
      expect(segment.getDescription(2)).toEqual('control group number (must match GS06)');
    });
  });
});
