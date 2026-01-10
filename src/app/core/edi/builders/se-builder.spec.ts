import { SeBuilder } from './se-builder';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';
import {Segment} from '@edi/segment';

describe('SeBuilder', () => {
  let seBuilder: SeBuilder;
  let segment: Segment;
  const seSegment = 'SE*10*0001~';
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    seBuilder = new SeBuilder(seSegment, delimiters);
    segment = seBuilder.getSegment();
  });

  it('should create an instance', () => {
    expect(seBuilder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'SE\' in element 0', () => {
      expect(segment.getElement(0)).toEqual('SE');
    });

    it('should return \'10\' in element 1', () => {
      expect(segment.getElement(1)).toEqual('10');
    });

    it('should return \'0001\' in element 2', () => {
      expect(segment.getElement(2)).toEqual('0001');
    });
  });

  describe('check descriptions', () => {
    it('should display \'number of included segments\' for SE01', () => {
      expect(segment.getSegmentId(1)).toEqual('SE01');
      expect(segment.getDescription(1)).toEqual('segment count from ST-SE including ST & SE lines');
    });

    it('should display \'control number of the group\' for SE02', () => {
      expect(segment.getSegmentId(2)).toEqual('SE02');
      expect(segment.getDescription(2)).toEqual('transaction set control number');
    });
  })
});
