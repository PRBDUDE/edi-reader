import {IeaBuilder} from './iea-builder';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';

describe('IeaBuilder', () => {
  let ieaBuilder: IeaBuilder;
  const ieaSegment = 'IEA*1*000000905~'
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    ieaBuilder = new IeaBuilder(ieaSegment, delimiters);
  })

  it('should create an instance', () => {
    expect(ieaBuilder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'IEA\' in element 0', () => {
      expect(ieaBuilder.getSegment().getElement(0)).toEqual('IEA');
    });

    it('should return \'1\' in element 1', () => {
      expect(ieaBuilder.getSegment().getElement(1)).toEqual('1');
    });

    it('should return \'000000905\' in element 2', () => {
      expect(ieaBuilder.getSegment().getElement(2)).toEqual('000000905');
    });
  });

  describe('check descriptions', () => {
    it('should display \'number of groups\' for IEA01', () => {
      expect(ieaBuilder.getSegment().getSegmentId(1)).toEqual('IEA01');
      expect(ieaBuilder.getSegment().getDescription(1)).toEqual('number of groups');
    });

    it('should display \'interchange control number (must match ISA13)\' for IEA02', () => {
      expect(ieaBuilder.getSegment().getSegmentId(2)).toEqual('IEA02');
      expect(ieaBuilder.getSegment().getDescription(2)).toEqual('interchange control number (must match ISA13)');
    });
  });
});
