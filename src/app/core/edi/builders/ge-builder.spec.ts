import {GeBuilder} from './ge-builder';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';

describe('GeBuilder', () => {
  let geBuilder: GeBuilder;
  const geSegment = 'GE*2*1~';
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    geBuilder = new GeBuilder(geSegment, delimiters);
  });

  it('should create an instance', () => {
    expect(geBuilder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'GE\' in element 0', () => {
      expect(geBuilder.getSegment().getElement(0)).toEqual('GE');
    });

    it('should return \'2\' in element 1', () => {
      expect(geBuilder.getSegment().getElement(1)).toEqual('2');
    });

    it('should return \'1\' in element 2', () => {
      expect(geBuilder.getSegment().getElement(2)).toEqual('1');
    });
  });

  describe('check descriptions', () => {
    it('should display \'number of transaction sets\' for GE01', () => {
      expect(geBuilder.getSegment().getSegmentId(1)).toEqual('GE01');
      expect(geBuilder.getSegment().getDescription(1)).toEqual('number of transaction sets');
    });

    it('should display \'control group number (must match GS06)\' for GE02', () => {
      expect(geBuilder.getSegment().getSegmentId(2)).toEqual('GE02');
      expect(geBuilder.getSegment().getDescription(2)).toEqual('control group number (must match GS06)');
    });
  });
});
