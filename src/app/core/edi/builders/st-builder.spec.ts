import { StBuilder } from './st-builder';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';
import {Segment} from '@edi/segment';

describe('StBuilder', () => {
  let stBuilder: StBuilder;
  let segment: Segment;
  const stSegment = 'ST*834*0001*005010X220A1~';
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    stBuilder = new StBuilder(stSegment, delimiters);
    segment = stBuilder.getSegment();
  });

  it('should create an instance', () => {
    expect(stBuilder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'ST\' in element 0', () => {
      expect(segment.getElement(0)).toEqual('ST');
    });

    it('should return \'834\' in element 1', () => {
      expect(segment.getElement(1)).toEqual('834');
    });

    it('should return \'0001\' in element 2', () => {
      expect(segment.getElement(2)).toEqual('0001');
    });

    it('should return \'005010X220A1\' in element 3', () => {
      expect(segment.getElement(3)).toEqual('005010X220A1');
    });
  });

  describe('check descriptions', () => {
    it('should display \'transaction set identifier code\' for ST01', () => {
      expect(segment.getSegmentId(1)).toEqual('ST01');
      expect(segment.getDescription(1)).toEqual('transaction set identifier code');
    });

    it('should display \'transaction set control number\' for ST02', () => {
      expect(segment.getSegmentId(2)).toEqual('ST02');
      expect(segment.getDescription(2)).toEqual('transaction set control number');
    });

    it('should display \'implementation convention reference\' for ST03', () => {
      expect(segment.getSegmentId(3)).toEqual('ST03');
      expect(segment.getDescription(3)).toEqual('implementation convention reference');
    });
  })
});
