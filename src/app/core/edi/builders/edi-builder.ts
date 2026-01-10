import {Segment} from '../segment';
import {Delimiters} from '../delimiters';

export class EdiBuilder {
  protected _segment: Segment

  constructor(segment: string, delimiters: Delimiters) {
    this._segment = new Segment(segment, delimiters);
    this.setDescriptions();
  }

  getSegment() {
    return this._segment;
  }

  protected setDescriptions() {

  }

  protected setIdAndDescription(index: number, id: string, description: string) {
    this._segment.setSegmentId(index, id);
    this._segment.setDescription(index, description);
  }
}
