import {Delimiters} from '../delimiters';
import {IsaBuilder} from '@edi/builders/isa-builder';
import {EdiBuilder} from '@edi/builders/edi-builder';
import {IeaBuilder} from '@edi/builders/iea-builder';

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
      }
    }
    return new EdiBuilder(segment, this.delimiters);
  }
}
