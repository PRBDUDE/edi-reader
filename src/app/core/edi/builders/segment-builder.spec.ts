import {SegmentBuilder} from './segment-builder';
import {IsaBuilder} from '@edi/builders/isa-builder';
import {GsBuilder} from '@edi/builders/gs-builder';
import {IeaBuilder} from '@edi/builders/iea-builder';
import {StBuilder} from '@edi/builders/st-builder';
import {GeBuilder} from '@edi/builders/ge-builder';
import {BgnBuilder} from '@edi/builders/bgn-builder';
import {RefBuilder} from '@edi/builders/ref-builder';
import {DtpBuilder} from '@edi/builders/dtp-builder';
import {N1Builder} from '@edi/builders/n1-builder';
import {N3Builder} from '@edi/builders/n3-builder';
import {N4Builder} from '@edi/builders/n4-builder';
import {DmgBuilder} from '@edi/builders/dmg-builder';
import {HdBuilder} from '@edi/builders/hd-builder';

describe('SegmentBuilder', () => {
  let builder: SegmentBuilder;
  const isa = 'ISA*00*          *00*          *ZZ*87790056      *ZZ*576687090     *251107*1430*^*00501*000000905*0*T*:~';

  beforeEach(() => {
    try {
      builder = new SegmentBuilder(isa);
      builder.buildSegment(isa);
    } catch (e) {
      fail('should be valid ISA segment');
    }
  });

  it('should create an instance', () => {
    expect(builder).toBeTruthy();
  });

  it('should get delimiters', () => {
    expect(builder.getDelimiters()?.getSegmentDelimiter()).toEqual('~');
    expect(builder.getDelimiters()?.getElementDelimiter()).toEqual('*');
    expect(builder.getDelimiters()?.getSubElementDelimiter()).toEqual(':');
  });

  it('should create isa segment', () => {
    const isaSegment = builder.buildSegment('ISA*00*          *00*          *ZZ*87790056      *ZZ*576687090     *251107*1430*^*00501*000000905*0*T*:~');
    expect(isaSegment).toBeInstanceOf(IsaBuilder);
  });

  it('should create iea segment', () => {
    const ieaSegment = builder.buildSegment('IEA*1*000000905~');
    expect(ieaSegment).toBeInstanceOf(IeaBuilder);
  });

  it('should create gs segment', () => {
    const gsSegment = builder.buildSegment('GS*FA*87790056*576687090*20251107*143000*X*005010X221A1~');
    expect(gsSegment).toBeInstanceOf(GsBuilder);
  });

  it('should create ge segment', () => {
    const geSegment = builder.buildSegment('GE*1*000000905~');
    expect(geSegment).toBeInstanceOf(GeBuilder);
  });

  it('should create st segment', () => {
    const stSegment = builder.buildSegment('ST*850*000000905~');
    expect(stSegment).toBeInstanceOf(StBuilder);
  });

  it('should create bgn segment', () => {
    const bgnSegment = builder.buildSegment('BGN*00*C*20251107*143000*1*T*1~');
    expect(bgnSegment).toBeInstanceOf(BgnBuilder);
  });

  it('should create ref segment', () => {
    const refSegment = builder.buildSegment('REF*EI*1234567890~');
    expect(refSegment).toBeInstanceOf(RefBuilder);
  });

  it('should create dtp segment', () => {
    const dtpSegment = builder.buildSegment('DTP*431*D8*20251107~');
    expect(dtpSegment).toBeInstanceOf(DtpBuilder);
  });

  it('should create n1 segment', () => {
    const n1Segment = builder.buildSegment('N1*PR*2*SOME COMPANY*123 MAIN ST*APT # 34*CITY*ST*55555~');
    expect(n1Segment).toBeInstanceOf(N1Builder);
  });

  it('should create n3 segment', () => {
    const n3Segment = builder.buildSegment('N3*123 MAIN ST*Apt # 34~');
    expect(n3Segment).toBeInstanceOf(N3Builder);
  });

  it('should create n4 segment', () => {
    const n4Segment = builder.buildSegment('N4*CITY*ST*55555~');
    expect(n4Segment).toBeInstanceOf(N4Builder);
  });

  it('should create dmg segment', () => {
    const dmgSegment = builder.buildSegment('DMG*D8*19550115*M~');
    expect(dmgSegment).toBeInstanceOf(DmgBuilder);
  });

  it('should create hd segment', () => {
    const hdSegment = builder.buildSegment('HD*1*X*1234567890~');
    expect(hdSegment).toBeInstanceOf(HdBuilder);
  });
});
