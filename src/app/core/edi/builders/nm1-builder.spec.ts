import { Nm1Builder } from './nm1-builder';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';

describe('Nm1Builder', () => {
  let builder: Nm1Builder;
  let segment: any;
  const nm1Segment = 'NM1*IL*1*DOE*PAUL****34*234567891~';
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    builder = new Nm1Builder(nm1Segment, delimiters);
    segment = builder.getSegment();
  })

  it('should create an instance', () => {
    expect(builder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'NM1\' in element 0', () => {
      expect(segment.getElement(0)).toEqual('NM1');
    });

    it('should return \'IL\' in element 1', () => {
      expect(segment.getElement(1)).toEqual('IL');
    });

    it('should return \'1\' in element 2', () => {
      expect(segment.getElement(2)).toEqual('1');
    });

    it('should return \'DOE\' in element 3', () => {
      expect(segment.getElement(3)).toEqual('DOE');
    });

    it('should return \'PAUL\' in element 4', () => {
      expect(segment.getElement(4)).toEqual('PAUL');
    });

    it('should return \'34\' in element 8', () => {
      expect(segment.getElement(8)).toEqual('34');
    });

    it('should return \'234567891\' in element 9', () => {
      expect(segment.getElement(9)).toEqual('234567891');
    });
  });

  describe('check descriptions', () => {
    it('should display \'relationship code\' for NM101', () => {
      expect(segment.getSegmentId(1)).toEqual('NM101');
      expect(segment.getDescription(1)).toEqual('relationship code');
    });

    it('should display \'entity identifier code\' for NM102', () => {
      expect(segment.getSegmentId(2)).toEqual('NM102');
      expect(segment.getDescription(2)).toEqual('entity identifier code');
    });

    it('should display \'last name\' for NM103', () => {
      expect(segment.getSegmentId(3)).toEqual('NM103');
      expect(segment.getDescription(3)).toEqual('last name');
    });

    it('should display \'first name\' for NM104', () => {
      expect(segment.getSegmentId(4)).toEqual('NM104');
      expect(segment.getDescription(4)).toEqual('first name');
    });

    it('should display \'middle initial or name\' for NM105', () => {
      expect(segment.getSegmentId(5)).toEqual('NM105');
      expect(segment.getDescription(5)).toEqual('middle initial or name');
    });

    it('should display \'identification code\' for NM106', () => {
      expect(segment.getSegmentId(6)).toEqual('NM106');
      expect(segment.getDescription(6)).toEqual('identification code');
    });

    it('should display \'entity type\' for NM107', () => {
      expect(segment.getSegmentId(7)).toEqual('NM107');
      expect(segment.getDescription(7)).toEqual('entity type');
    });

    it('should display \'identification code qualifier\' for NM108', () => {
      expect(segment.getSegmentId(8)).toEqual('NM108');
      expect(segment.getDescription(8)).toEqual('identification code qualifier');
    });

    it('should display \'identification code\' for NM109', () => {
      expect(segment.getSegmentId(9)).toEqual('NM109');
      expect(segment.getDescription(9)).toEqual('identification code');
    });
  });
});
