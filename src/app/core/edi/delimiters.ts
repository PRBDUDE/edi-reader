export class Delimiters {
  private _segment: string | undefined;
  private _element: string | undefined;
  private _subElement: string | undefined;

  constructor(segment: string) {
    if (segment.length === 104) {
      this._element = segment.charAt(101);
      this._subElement = segment.charAt(102);
      this._segment = segment.charAt(103);
    }
  }

  getSegmentDelimiter() {
    return this._segment;
  }

  getElementDelimiter() {
    return this._element;
  }

  getSubElementDelimiter() {
    return this._subElement;
  }
}
