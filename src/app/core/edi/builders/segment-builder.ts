import {Delimiters} from '../delimiters';
import {IsaBuilder} from '@edi/builders/isa-builder';
import {EdiBuilder} from '@edi/builders/edi-builder';
import {IeaBuilder} from '@edi/builders/iea-builder';
import {GsBuilder} from '@edi/builders/gs-builder';
import {StBuilder} from '@edi/builders/st-builder';
import {GeBuilder} from '@edi/builders/ge-builder';
import {SeBuilder} from '@edi/builders/se-builder';
import {BgnBuilder} from '@edi/builders/bgn-builder';
import {N1Builder} from '@edi/builders/n1-builder';
import {RefBuilder} from '@edi/builders/ref-builder';
import {N3Builder} from '@edi/builders/n3-builder';
import {N4Builder} from '@edi/builders/n4-builder';
import {InsBuilder} from '@edi/builders/ins-builder';

export class SegmentBuilder {
  private delimiters: Delimiters | undefined;

  getDelimiters() {
    return this.delimiters;
  }

  buildSegment(segment: string) {
    if (segment.startsWith('ISA')) {
      this.delimiters = new Delimiters(segment);
      return new IsaBuilder(segment, this.delimiters);
    }
    if (!this.delimiters) {
      throw new Error('Please process the ISA segment first.');
    } else {
      if (segment.startsWith('IEA')) {
        return new IeaBuilder(segment, this.delimiters);
      } else if (segment.startsWith('GS')) {
        return new GsBuilder(segment, this.delimiters);
      } else if (segment.startsWith('ST')) {
        return new StBuilder(segment, this.delimiters);
      } else if (segment.startsWith('SE')) {
        return new SeBuilder(segment, this.delimiters);
      } else if (segment.startsWith('GE')) {
        return new GeBuilder(segment, this.delimiters);
      } else if (segment.startsWith('BGN')) {
        return new BgnBuilder(segment, this.delimiters);
      } else if (segment.startsWith('REF')) {
        return new RefBuilder(segment, this.delimiters);
      } else if (segment.startsWith('N1')) {
        return new N1Builder(segment, this.delimiters);
      } else if (segment.startsWith('N3')) {
        return new N3Builder(segment, this.delimiters);
      } else if (segment.startsWith('N4')) {
        return new N4Builder(segment, this.delimiters);
      } else if (segment.startsWith('INS')) {
        return new InsBuilder(segment, this.delimiters);
      }
    }
    return new EdiBuilder(segment, this.delimiters);
  }
}
