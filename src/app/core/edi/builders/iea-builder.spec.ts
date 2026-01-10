import {IeaBuilder} from './iea-builder';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';
import {Segment} from '@edi/segment';

describe('IeaBuilder', () => {
  let ieaBuilder: IeaBuilder;
  let segment: Segment;
  const ieaSegment = 'IEA*1*000000905~'
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    ieaBuilder = new IeaBuilder(ieaSegment, delimiters);
    segment = ieaBuilder.getSegment();
  })

  it('should create an instance', () => {
    expect(ieaBuilder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'IEA\' in element 0', () => {
      expect(segment.getElement(0)).toEqual('IEA');
    });

    it('should return \'1\' in element 1', () => {
      expect(segment.getElement(1)).toEqual('1');
    });

    it('should return \'000000905\' in element 2', () => {
      expect(segment.getElement(2)).toEqual('000000905');
    });
  });

  describe('check descriptions', () => {
    it('should display \'number of groups\' for IEA01', () => {
      expect(segment.getSegmentId(1)).toEqual('IEA01');
      expect(segment.getDescription(1)).toEqual('number of groups');
    });

    it('should display \'interchange control number (must match ISA13)\' for IEA02', () => {
      expect(segment.getSegmentId(2)).toEqual('IEA02');
      expect(segment.getDescription(2)).toEqual('interchange control number (must match ISA13)');
    });
  });
});
