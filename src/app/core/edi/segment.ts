import {Delimiters} from './delimiters';
import {Element} from './element';

export class Segment {
  private _elements: Element[] = new Array<Element>();
  private _delimiters: Delimiters | undefined;
  private _loop?: string | undefined;

  constructor(segment: string, delimiters: Delimiters, loop?: string | undefined) {
    this._delimiters = delimiters;
    const segments = segment
      .substring(0, segment.length - 1)
      .split(String(this._delimiters.getElementDelimiter()));
    segments.forEach((element) => {
      this._elements.push(new Element(element, delimiters));
    });
    if (loop && segments.length > 1) {
      this._loop = loop;
    }
  }

  getElement(index: number) {
    return this._elements?.[index].getElement();
  }

  getDescription(index: number) {
    return this._elements?.[index].getDescription();
  }

  setDescription(index: number, description: string) {
    if (index > this._elements?.length - 1) {
      return;
    }
    this._elements[index].setDescription(description);
  }

  getSegmentId(index: number) {
    return this._elements?.[index].getSegmentId();
  }

  setSegmentId(index: number, segmentId: string) {
    if (index > this._elements?.length - 1) {
      return;
    }
    this._elements[index].setSegmentId(segmentId);
  }

  getSubElement(index: number, subIndex: number) {
    return this._elements?.[index].getSubElement(subIndex);
  }

  getLoop() {
    return this._loop;
  }

  setLoop(loop: string) {
    this._loop = loop;
  }

  getDelimiters() {
    return this._delimiters;
  }

  setError(index: number, error: string) {
    this._elements[index].setError(error);
  }

  getError(index: number) {
    return this._elements[index].getError();
  }

  isError() {
    return this._elements.some(element => element.isError());
  }
}
