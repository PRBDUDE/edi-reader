import { PerBuilder } from './per-builder';
import {Segment} from '@edi/segment';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';

describe('PerBuilder', () => {
  let builder: PerBuilder;
  let segment: Segment;
  const per = 'PER*IP*JANE DOE*HP*5551234567*CP*5554332826*EM*JANE.DOE@DEMO.COM~'
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    builder = new PerBuilder(per, delimiters);
    segment = builder.getSegment();
  });

  it('should create an instance', () => {
    expect(builder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'PER\' in element 0', () => {
      expect(segment.getElement(0)).toEqual('PER');
    });

    it('should return \'IP\' in element 1', () => {
      expect(segment.getElement(1)).toEqual('IP');
    });

    it('should return \'JANE DOE\' in element 2', () => {
      expect(segment.getElement(2)).toEqual('JANE DOE');
    });

    it('should return \'HP\' in element 3', () => {
      expect(segment.getElement(3)).toEqual('HP');
    });

    it('should return \'5551234567\' in element 4', () => {
      expect(segment.getElement(4)).toEqual('5551234567');
    });

    it('should return \'CP\' in element 5', () => {
      expect(segment.getElement(5)).toEqual('CP');
    });

    it('should return \'5554332826\' in element 6', () => {
      expect(segment.getElement(6)).toEqual('5554332826');
    });

    it('should return \'EM\' in element 7', () => {
      expect(segment.getElement(7)).toEqual('EM');
    });

    it('should return \'JANE.DOE@DEMO.COM\' in element 8', () => {
      expect(segment.getElement(8)).toEqual('JANE.DOE@DEMO.COM');
    });
  });
});
