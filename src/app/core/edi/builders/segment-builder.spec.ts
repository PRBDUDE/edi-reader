import {SegmentBuilder} from './segment-builder';

describe('SegmentBuilder', () => {
  let builder: SegmentBuilder;

  beforeEach(() => {
    const isa = 'ISA*00*          *00*          *ZZ*87790056      *ZZ*576687090     *251107*1430*^*00501*000000905*0*T*:~';
    try {
      builder = new SegmentBuilder();
      builder.buildSegment(isa);
    } catch (e) {
      fail('should be valid ISA segment');
    }
  });

  it('should create an instance', () => {
    expect(builder).toBeTruthy();
  });

  it('should throw an error if segment used is not \'ISA\' segment', () => {
    let test: SegmentBuilder | undefined;

    try {
      test = new SegmentBuilder();
      test.buildSegment('GS*FA*123456789*123456789*20210101*123456789*X*005010X221A1~');
      fail('should not reach here');
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });

  it('should get delimiters', () => {
    expect(builder.getDelimiters()?.getSegmentDelimiter()).toEqual('~');
    expect(builder.getDelimiters()?.getElementDelimiter()).toEqual('*');
    expect(builder.getDelimiters()?.getSubElementDelimiter()).toEqual(':');
  });

  // it('should create isa segment', () => {
  //   const isaSegment = builder.buildSegment('ISA*00*          *00*          *ZZ*87790056      *ZZ*576687090     *251107*1430*^*00501*000000905*0*T*:~');
  //   expect(isaSegment).toEqual(
  //     'ISA*00*          *00*          *ZZ*87790056      *ZZ*576687090     *251107*1430*^*00501*000000905*0*T*:~'
  //   )
  //
  // });
});
