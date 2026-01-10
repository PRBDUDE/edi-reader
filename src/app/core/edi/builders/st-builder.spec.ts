import { StBuilder } from './st-builder';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';

describe('StBuilder', () => {
  let stBuilder: StBuilder;
  const stSegment = 'ST*834*0001*005010X220A1~';
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    stBuilder = new StBuilder(stSegment, delimiters);
  });

  it('should create an instance', () => {
    expect(stBuilder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'ST\' in element 0', () => {
      expect(stBuilder.getSegment().getElement(0)).toEqual('ST');
    });

    it('should return \'834\' in element 1', () => {
      expect(stBuilder.getSegment().getElement(1)).toEqual('834');
    });

    it('should return \'0001\' in element 2', () => {
      expect(stBuilder.getSegment().getElement(2)).toEqual('0001');
    });

    it('should return \'005010X220A1\' in element 3', () => {
      expect(stBuilder.getSegment().getElement(3)).toEqual('005010X220A1');
    });
  });

  describe('check descriptions', () => {
    it('should display \'transaction set identifier code\' for ST01', () => {
      expect(stBuilder.getSegment().getSegmentId(1)).toEqual('ST01');
      expect(stBuilder.getSegment().getDescription(1)).toEqual('transaction set identifier code');
    });

    it('should display \'transaction set control number\' for ST02', () => {
      expect(stBuilder.getSegment().getSegmentId(2)).toEqual('ST02');
      expect(stBuilder.getSegment().getDescription(2)).toEqual('transaction set control number');
    });

    it('should display \'implementation convention reference\' for ST03', () => {
      expect(stBuilder.getSegment().getSegmentId(3)).toEqual('ST03');
      expect(stBuilder.getSegment().getDescription(3)).toEqual('implementation convention reference');
    });
  })
});
