import {EdiDelimiters} from './model/edi-delimiters';

export abstract class BaseEdi {
  valid = false;
  delimiters: EdiDelimiters = new EdiDelimiters();
}
