import { SeBuilder } from './se-builder';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';

describe('SeBuilder', () => {
  let seBuilder: SeBuilder;
  const seSegment = 'SE*10*0001~';
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    seBuilder = new SeBuilder(seSegment, delimiters);
  });

  it('should create an instance', () => {
    expect(seBuilder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'SE\' in element 0', () => {
      expect(seBuilder.getSegment().getElement(0)).toEqual('SE');
    });

    it('should return \'10\' in element 1', () => {
      expect(seBuilder.getSegment().getElement(1)).toEqual('10');
    });

    it('should return \'0001\' in element 2', () => {
      expect(seBuilder.getSegment().getElement(2)).toEqual('0001');
    });
  });

  describe('check descriptions', () => {
    it('should display \'number of included segments\' for SE01', () => {
      expect(seBuilder.getSegment().getSegmentId(1)).toEqual('SE01');
      expect(seBuilder.getSegment().getDescription(1)).toEqual('segment count from ST-SE including ST & SE lines');
    });

    it('should display \'control number of the group\' for SE02', () => {
      expect(seBuilder.getSegment().getSegmentId(2)).toEqual('SE02');
      expect(seBuilder.getSegment().getDescription(2)).toEqual('transaction set control number');
    });
  })
});
