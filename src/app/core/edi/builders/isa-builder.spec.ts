import {IsaBuilder} from './isa-builder';
import {Delimiters} from '../delimiters';

describe('IsaBuilder', () => {
  let isaBuilder: IsaBuilder;
  const isaSegment = 'ISA*00*          *00*          *ZZ*87790056      *ZZ*576687090     *251107*1430*^*00501*000000905*0*T*:~';
  const delimiters = new Delimiters(isaSegment);

  beforeEach(() => {
    isaBuilder = new IsaBuilder(isaSegment, delimiters)
  });

  it('should create an instance', () => {
    expect(isaBuilder).toBeTruthy();
  });

  describe('check elements', () => {
    it('should return \'ISA\' in element 0', () => {
      expect(isaBuilder.getSegment().getElement(0)).toEqual('ISA');
    });

    it('should return \'00\' in element 1', () => {
      expect(isaBuilder.getSegment().getElement(1)).toEqual('00');
    });

    it('should return \'          \' in element 2', () => {
      expect(isaBuilder.getSegment().getElement(2)).toEqual('          ');
    });

    it('should return \'00\' in element 3', () => {
      expect(isaBuilder.getSegment().getElement(3)).toEqual('00');
    });

    it('should return \'          \' in element 4', () => {
      expect(isaBuilder.getSegment().getElement(4)).toEqual('          ');
    });

    it('should return \'ZZ\' in element 5', () => {
      expect(isaBuilder.getSegment().getElement(5)).toEqual('ZZ');
    });

    it('should return \'87790056      \' in element 6', () => {
      expect(isaBuilder.getSegment().getElement(6)).toEqual('87790056      ');
    });

    it('should return \'ZZ\' in element 7', () => {
      expect(isaBuilder.getSegment().getElement(7)).toEqual('ZZ');
    });

    it('should return \'576687090     \' in element 8', () => {
      expect(isaBuilder.getSegment().getElement(8)).toEqual('576687090     ');
    });

    it('should return \'251107\' in element 9', () => {
      expect(isaBuilder.getSegment().getElement(9)).toEqual('251107');
    });

    it('should return \'1430\' in element 10', () => {
      expect(isaBuilder.getSegment().getElement(10)).toEqual('1430');
    });

    it('should return \'^\' in element 11', () => {
      expect(isaBuilder.getSegment().getElement(11)).toEqual('^');
    });

    it('should return \'00501\' in element 12', () => {
      expect(isaBuilder.getSegment().getElement(12)).toEqual('00501');
    });

    it('should return \'000000905\' in element 13', () => {
      expect(isaBuilder.getSegment().getElement(13)).toEqual('000000905');
    });

    it('should return \'0\' in element 14', () => {
      expect(isaBuilder.getSegment().getElement(14)).toEqual('0');
    });

    it('should return \'T\' in element 15', () => {
      expect(isaBuilder.getSegment().getElement(15)).toEqual('T');
    });

    it('should return \':\' in element 16', () => {
      expect(isaBuilder.getSegment().getElement(16)).toEqual(':');
    });
  });

  describe('check descriptions', () => {
    it('should display \'type of authorization\' for ISA01', () => {
      expect(isaBuilder.getSegment().getSegmentId(1)).toEqual('ISA01');
      expect(isaBuilder.getSegment().getDescription(1)).toEqual('type of authorization');
    });

    it('should display \'actual authorization info\' for ISA02', () => {
      expect(isaBuilder.getSegment().getSegmentId(2)).toEqual('ISA02');
      expect(isaBuilder.getSegment().getDescription(2)).toEqual('actual authorization info');
    });

    it('should display \'type of security info\' for ISA03', () => {
      expect(isaBuilder.getSegment().getSegmentId(3)).toEqual('ISA03');
      expect(isaBuilder.getSegment().getDescription(3)).toEqual('type of security info');
    });

    it('should display \'actual security info\' for ISA04', () => {
      expect(isaBuilder.getSegment().getSegmentId(4)).toEqual('ISA04');
      expect(isaBuilder.getSegment().getDescription(4)).toEqual('actual security info');
    });

    it('should display \'code identifying the sender\'s ID type\' for ISA05', () => {
      expect(isaBuilder.getSegment().getSegmentId(5)).toEqual('ISA05');
      expect(isaBuilder.getSegment().getDescription(5)).toEqual('code identifying the sender\'s ID type');
    });

    it('should display \'sender\'s ID\' for ISA06', () => {
      expect(isaBuilder.getSegment().getSegmentId(6)).toEqual('ISA06');
      expect(isaBuilder.getSegment().getDescription(6)).toEqual('sender\'s ID');
    });

    it('should display \'code identifying the receiver\'s ID type\' for ISA07', () => {
      expect(isaBuilder.getSegment().getSegmentId(7)).toEqual('ISA07');
      expect(isaBuilder.getSegment().getDescription(7)).toEqual('code identifying the receiver\'s ID type');
    });

    it('should display \'receiver\'s ID\' for ISA08', () => {
      expect(isaBuilder.getSegment().getSegmentId(8)).toEqual('ISA08');
      expect(isaBuilder.getSegment().getDescription(8)).toEqual('receiver\'s ID');
    });

    it('should display \'date, time, and date of revision\' for ISA09', () => {
      expect(isaBuilder.getSegment().getSegmentId(9)).toEqual('ISA09');
      expect(isaBuilder.getSegment().getDescription(9)).toEqual('date in YYMMDD format');
    });

    it('should display \'control standard segment ID counter\' for ISA10', () => {
      expect(isaBuilder.getSegment().getSegmentId(10)).toEqual('ISA10');
      expect(isaBuilder.getSegment().getDescription(10)).toEqual('time in HHMM format');
    });

    it('should display \'interchange control standard ID\' for ISA11', () => {
      expect(isaBuilder.getSegment().getSegmentId(11)).toEqual('ISA11');
      expect(isaBuilder.getSegment().getDescription(11)).toEqual('control standards ID');
    });

    it('should display \'interchange control number\' for ISA12', () => {
      expect(isaBuilder.getSegment().getSegmentId(12)).toEqual('ISA12');
      expect(isaBuilder.getSegment().getDescription(12)).toEqual('interchange control version number');
    });

    it('should display \'acknowledgment requested\' for ISA13', () => {
      expect(isaBuilder.getSegment().getSegmentId(13)).toEqual('ISA13');
      expect(isaBuilder.getSegment().getDescription(13)).toEqual('interchange control number');
    });

    it('should display \'usage indicator\' for ISA14', () => {
      expect(isaBuilder.getSegment().getSegmentId(14)).toEqual('ISA14');
      expect(isaBuilder.getSegment().getDescription(14)).toEqual('acknowledgement requested');
    });

    it('should display \'component element separator\' for ISA15', () => {
      expect(isaBuilder.getSegment().getSegmentId(15)).toEqual('ISA15');
      expect(isaBuilder.getSegment().getDescription(15)).toEqual('usage indicator (P for Production; T for Test)');
    });

    it('should display \'data element separator\' for ISA16', () => {
      expect(isaBuilder.getSegment().getSegmentId(16)).toEqual('ISA16');
      expect(isaBuilder.getSegment().getDescription(16)).toEqual('component element separator');
    });
  });
});
