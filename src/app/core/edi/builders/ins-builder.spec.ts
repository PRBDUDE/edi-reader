import { InsBuilder } from './ins-builder';
import {Segment} from '@edi/segment';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';

describe('InsBuilder', () => {
  let builderFT: InsBuilder;
  let builderRT: InsBuilder;
  let builderDP: InsBuilder;
  let segmentFT: Segment;
  let segmentRT: Segment;
  let segmentDP: Segment;
  const insSegmentRetired = 'INS*Y*18*001**A*B**RT~'
  const insSegmentFullTime = 'INS*Y*18*021*XN*A*E**FT~';
  const insSegmentDependent = 'INS*N*01*021*XN*A*E~';
  const delimiters = getTestEdiDelimiters();

  beforeEach(() => {
    builderFT = new InsBuilder(insSegmentFullTime, delimiters);
    segmentFT = builderFT.getSegment();
    builderRT = new InsBuilder(insSegmentRetired, delimiters);
    segmentRT = builderRT.getSegment();
    builderDP = new InsBuilder(insSegmentDependent, delimiters);
    segmentDP = builderDP.getSegment();
  });

  it('should create an instance', () => {
    expect(segmentFT).toBeTruthy();
    expect(segmentRT).toBeTruthy();
    expect(segmentDP).toBeTruthy();
  });
});
