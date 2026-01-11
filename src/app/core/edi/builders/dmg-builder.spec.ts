import { DmgBuilder } from './dmg-builder';
import {Segment} from '@edi/segment';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';

describe('DmgBuilder', () => {
  let builder: DmgBuilder;
  let segment: Segment;
  const dmgSegment = 'DMG*D8*19550115*M~';
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    builder = new DmgBuilder(dmgSegment, delimiters);
    segment = builder.getSegment();
  });

  it('should create an instance', () => {
    expect(builder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'DMG\' in element 0', () => {
      expect(segment.getElement(0)).toEqual('DMG');
    });

    it('should return \'D8\' in element 1', () => {
      expect(segment.getElement(1)).toEqual('D8');
    });

    it('should return \'19550115\' in element 2', () => {
      expect(segment.getElement(2)).toEqual('19550115');
    });

    it('should return \'M\' in element 3', () => {
      expect(segment.getElement(3)).toEqual('M');
    });
  });

  describe('check descriptions', () => {
    it('should display \'date format\' for DMG01', () => {
      expect(segment.getSegmentId(1)).toEqual('DMG01');
      expect(segment.getDescription(1)).toEqual('date format');
    });

    it('should display \'birthdate\' for DMG02', () => {
      expect(segment.getSegmentId(2)).toEqual('DMG02');
      expect(segment.getDescription(2)).toEqual('birthdate');
    });

    it('should display \'gender\' for DMG03', () => {
      expect(segment.getSegmentId(3)).toEqual('DMG03');
      expect(segment.getDescription(3)).toEqual('gender');
    });
  });
});
