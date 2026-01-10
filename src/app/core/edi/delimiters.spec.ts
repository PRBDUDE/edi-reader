import {Delimiters} from './delimiters';

describe('Delimiters', () => {
  let delimiters: Delimiters;

  beforeEach(() => {
    const isa = 'ISA*00*          *00*          *ZZ*87790056      *ZZ*576687090     *251107*1430*^*00501*000000905*0*T*:~';
    delimiters = new Delimiters(isa);
  });

  it('should create instance', () => {
    expect(delimiters).toBeTruthy();
  });

  describe('getDelimiters', () => {
    it('should get segment delimiter \'~\'', () => {
      expect(delimiters.getSegmentDelimiter()).toEqual('~');
    });

    it('should get element delimiter \'*\'', () => {
      expect(delimiters.getElementDelimiter()).toEqual('*');
    });

    it('should get sub element delimiter \':\'', () => {
      expect(delimiters.getSubElementDelimiter()).toEqual(':');
    });
  })
})
