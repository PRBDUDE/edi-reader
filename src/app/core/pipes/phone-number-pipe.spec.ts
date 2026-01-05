import {PhoneNumberPipe} from './phone-number-pipe';

describe('PhoneNumberPipe', () => {
  let pipe: PhoneNumberPipe;

  beforeEach(() => {
    pipe = new PhoneNumberPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format \'4445533\' as \'444-5533\'', () => {
    expect(pipe.transform('4445533')).toBe('444-5533');
  });

  it('should format \'2334445533\' as \'(233) 444-5533\'', () => {
    expect(pipe.transform('2334445533')).toBe('(233) 444-5533');
  });

  it('should format \'2334445533889\' as \'(233) 444-5533 ext: 889\'', () => {
    expect(pipe.transform('2334445533889')).toBe('(233) 444-5533 ext: 889');
  });
});
