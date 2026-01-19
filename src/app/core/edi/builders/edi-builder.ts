import {Segment} from '../segment';
import {Delimiters} from '../delimiters';

export class EdiBuilder {
  protected _segment: Segment
  protected _delimiters: Delimiters

  constructor(segment: string, delimiters: Delimiters, cssClass?: string) {
    this._delimiters = delimiters;
    if (cssClass) {
      this._segment = new Segment(segment, delimiters, cssClass);
    } else {
      this._segment = new Segment(segment, delimiters);
    }
    this.setDescriptions();
  }

  getSegment() {
    return this._segment;
  }

  getElements() {
    return this._segment.getElements();
  }

  getElement(index: number) {
    return this._segment.getElement(index);
  }

  getElementDelimiter() {
    return this._delimiters.getElementDelimiter();
  }

  getCssClass() {
    return this._segment.getCssClass() || 'SEGMENT';
  }

  protected setDescriptions() {

  }

  protected setIdAndDescription(index: number, id: string, description: string) {
    this._segment.setSegmentId(index, id);
    this._segment.setDescription(index, description);
  }
}
