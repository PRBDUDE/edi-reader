import {Delimiters} from './delimiters';

export class Element {
  private _data: string | undefined;
  private _delimiters: Delimiters | undefined;
  private _error?: string | undefined;
  private _segmentId?: string | undefined;
  private _description?: string | undefined;

  constructor(data: string, delimiters: Delimiters) {
    this._delimiters = delimiters;
    if (data.endsWith(String(this._delimiters.getSegmentDelimiter()))) {
      this._data = data.substring(0, data.length - 1);
    } else {
      this._data = data;
    }
  }

  getElement() {
    return this._data as string;
  }

  isSubElement() {
    return this._data?.includes(String(this._delimiters?.getSubElementDelimiter()));
  }

  getSubElement(index: number) {
    return this._data?.split(String(this._delimiters?.getSubElementDelimiter()))[ index]
  }

  getDescription() {
    return this._description;
  }

  setDescription(description: string) {
    this._description = description;
  }

  getSegmentId() {
    return this._segmentId;
  }

  setSegmentId(segmentId: string) {
    this._segmentId = segmentId;
  }

  isError() {
    return (this._error !== undefined);
  }

  getError() {
    return this._error;
  }

  setError(error: string) {
    this._error = error;
  }
}
