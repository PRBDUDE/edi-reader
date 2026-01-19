import {IsaBuilder} from './isa-builder';
import {Delimiters} from '../delimiters';
import {Segment} from '@edi/segment';

describe('IsaBuilder', () => {
  let isaBuilder: IsaBuilder;
  let segment: Segment;
  const isaSegment = 'ISA*00*          *00*          *ZZ*87790056      *ZZ*576687090     *251107*1430*^*00501*000000905*0*T*:~';
  const delimiters = new Delimiters(isaSegment);

  beforeEach(() => {
    isaBuilder = new IsaBuilder(isaSegment, delimiters)
    segment = isaBuilder.getSegment();
  });

  it('should create an instance', () => {
    expect(isaBuilder).toBeTruthy();
  });

  it('should have loop set to \'ISA\'', () => {
    expect(segment.getCssClass()).toEqual('ISA');
  });

  describe('check elements', () => {
    it('should return \'ISA\' in element 0', () => {
      expect(segment.getElement(0)).toEqual('ISA');
    });

    it('should return \'00\' in element 1', () => {
      expect(segment.getElement(1)).toEqual('00');
    });

    it('should return \'          \' in element 2', () => {
      expect(segment.getElement(2)).toEqual('          ');
    });

    it('should return \'00\' in element 3', () => {
      expect(segment.getElement(3)).toEqual('00');
    });

    it('should return \'          \' in element 4', () => {
      expect(segment.getElement(4)).toEqual('          ');
    });

    it('should return \'ZZ\' in element 5', () => {
      expect(segment.getElement(5)).toEqual('ZZ');
    });

    it('should return \'87790056      \' in element 6', () => {
      expect(segment.getElement(6)).toEqual('87790056      ');
    });

    it('should return \'ZZ\' in element 7', () => {
      expect(segment.getElement(7)).toEqual('ZZ');
    });

    it('should return \'576687090     \' in element 8', () => {
      expect(segment.getElement(8)).toEqual('576687090     ');
    });

    it('should return \'251107\' in element 9', () => {
      expect(segment.getElement(9)).toEqual('251107');
    });

    it('should return \'1430\' in element 10', () => {
      expect(segment.getElement(10)).toEqual('1430');
    });

    it('should return \'^\' in element 11', () => {
      expect(segment.getElement(11)).toEqual('^');
    });

    it('should return \'00501\' in element 12', () => {
      expect(segment.getElement(12)).toEqual('00501');
    });

    it('should return \'000000905\' in element 13', () => {
      expect(segment.getElement(13)).toEqual('000000905');
    });

    it('should return \'0\' in element 14', () => {
      expect(segment.getElement(14)).toEqual('0');
    });

    it('should return \'T\' in element 15', () => {
      expect(segment.getElement(15)).toEqual('T');
    });

    it('should return \':\' in element 16', () => {
      expect(segment.getElement(16)).toEqual(':');
    });
  });

  describe('check descriptions', () => {
    it('should display \'type of authorization\' for ISA01', () => {
      expect(segment.getSegmentId(1)).toEqual('ISA01');
      expect(segment.getDescription(1)).toEqual('type of authorization');
    });

    it('should display \'actual authorization info\' for ISA02', () => {
      expect(segment.getSegmentId(2)).toEqual('ISA02');
      expect(segment.getDescription(2)).toEqual('actual authorization info');
    });

    it('should display \'type of security info\' for ISA03', () => {
      expect(segment.getSegmentId(3)).toEqual('ISA03');
      expect(segment.getDescription(3)).toEqual('type of security info');
    });

    it('should display \'actual security info\' for ISA04', () => {
      expect(segment.getSegmentId(4)).toEqual('ISA04');
      expect(segment.getDescription(4)).toEqual('actual security info');
    });

    it('should display \'code identifying the sender\'s ID type\' for ISA05', () => {
      expect(segment.getSegmentId(5)).toEqual('ISA05');
      expect(segment.getDescription(5)).toEqual('code identifying the sender\'s ID type');
    });

    it('should display \'sender\'s ID\' for ISA06', () => {
      expect(segment.getSegmentId(6)).toEqual('ISA06');
      expect(segment.getDescription(6)).toEqual('sender\'s ID');
    });

    it('should display \'code identifying the receiver\'s ID type\' for ISA07', () => {
      expect(segment.getSegmentId(7)).toEqual('ISA07');
      expect(segment.getDescription(7)).toEqual('code identifying the receiver\'s ID type');
    });

    it('should display \'receiver\'s ID\' for ISA08', () => {
      expect(segment.getSegmentId(8)).toEqual('ISA08');
      expect(segment.getDescription(8)).toEqual('receiver\'s ID');
    });

    it('should display \'date, time, and date of revision\' for ISA09', () => {
      expect(segment.getSegmentId(9)).toEqual('ISA09');
      expect(segment.getDescription(9)).toEqual('date in YYMMDD format');
    });

    it('should display \'control standard segment ID counter\' for ISA10', () => {
      expect(segment.getSegmentId(10)).toEqual('ISA10');
      expect(segment.getDescription(10)).toEqual('time in HHMM format');
    });

    it('should display \'interchange control standard ID\' for ISA11', () => {
      expect(segment.getSegmentId(11)).toEqual('ISA11');
      expect(segment.getDescription(11)).toEqual('control standards ID');
    });

    it('should display \'interchange control number\' for ISA12', () => {
      expect(segment.getSegmentId(12)).toEqual('ISA12');
      expect(segment.getDescription(12)).toEqual('interchange control version number');
    });

    it('should display \'acknowledgment requested\' for ISA13', () => {
      expect(segment.getSegmentId(13)).toEqual('ISA13');
      expect(segment.getDescription(13)).toEqual('interchange control number');
    });

    it('should display \'usage indicator\' for ISA14', () => {
      expect(segment.getSegmentId(14)).toEqual('ISA14');
      expect(segment.getDescription(14)).toEqual('acknowledgement requested');
    });

    it('should display \'component element separator\' for ISA15', () => {
      expect(segment.getSegmentId(15)).toEqual('ISA15');
      expect(segment.getDescription(15)).toEqual('usage indicator (P for Production; T for Test)');
    });

    it('should display \'data element separator\' for ISA16', () => {
      expect(segment.getSegmentId(16)).toEqual('ISA16');
      expect(segment.getDescription(16)).toEqual('component element separator');
    });
  });
});
