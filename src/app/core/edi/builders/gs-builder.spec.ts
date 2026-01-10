import {GsBuilder} from './gs-builder';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';

describe('GsBuilder', () => {
  let gsBuilder: GsBuilder;
  const gsSegment = 'GS*BE*87790056*576687090*20251107*1430*1*X*005010X220A1~';
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    gsBuilder = new GsBuilder(gsSegment, delimiters);
  });

  it('should create an instance', () => {
    expect(gsBuilder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'GS\' in element 0', () => {
      expect(gsBuilder.getSegment().getElement(0)).toEqual('GS');
    });

    it('should return \'BE\' in element 1', () => {
      expect(gsBuilder.getSegment().getElement(1)).toEqual('BE');
    });

    it('should return \'87790056\' in element 2', () => {
      expect(gsBuilder.getSegment().getElement(2)).toEqual('87790056');
    });

    it('should return \'576687090\' in element 3', () => {
      expect(gsBuilder.getSegment().getElement(3)).toEqual('576687090');
    });

    it('should return \'20251107\' in element 4', () => {
      expect(gsBuilder.getSegment().getElement(4)).toEqual('20251107');
    });

    it('should return \'1430\' in element 5', () => {
      expect(gsBuilder.getSegment().getElement(5)).toEqual('1430');
    });

    it('should return \'1\' in element 6', () => {
      expect(gsBuilder.getSegment().getElement(6)).toEqual('1');
    });

    it('should return \'X\' in element 7', () => {
      expect(gsBuilder.getSegment().getElement(7)).toEqual('X');
    });

    it('should return \'005010X220A1\' in element 8', () => {
      expect(gsBuilder.getSegment().getElement(8)).toEqual('005010X220A1');
    });
  });

  describe('check descriptions', () => {
    it('should display \'functional identifier code\' for GS01', () => {
      expect(gsBuilder.getSegment().getDescription(1)).toEqual('functional identifier code');
    });

    it('should display \'application senders code\' for GS02', () => {
      expect(gsBuilder.getSegment().getDescription(2)).toEqual('application senders code');
    });

    it('should display \'application receivers code\' for GS03', () => {
      expect(gsBuilder.getSegment().getDescription(3)).toEqual('application receivers code');
    });

    it('should display \'date\' for GS04', () => {
      expect(gsBuilder.getSegment().getDescription(4)).toEqual('date the group was built (YYYYMMDD)');
    });

    it('should display \'time the group was built (HHMM)\' for GS05', () => {
      expect(gsBuilder.getSegment().getDescription(5)).toEqual('time the group was built (HHMM)');
    });

    it('should display \'control number\' for GS06', () => {
      expect(gsBuilder.getSegment().getDescription(6)).toEqual('control number');
    });

    it('should display \'responsible agency code\' for GS07', () => {
      expect(gsBuilder.getSegment().getDescription(7)).toEqual('responsible agency code');
    });

    it('should display \'version release / inquiry\' for GS08', () => {
      expect(gsBuilder.getSegment().getDescription(8)).toEqual('version release / inquiry');
    });
  });
});
