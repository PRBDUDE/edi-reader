import {PhoneNumberPipe} from './phone-number-pipe';

describe('PhoneNumberPipe', () => {
  let pipe: PhoneNumberPipe;

  beforeEach(() => {
    pipe = new PhoneNumberPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format \'2334445533\' as \'(233) 444-5533\'', () => {
    expect(pipe.transform('2334445533')).toBe('(233) 444-5533');
  });
});
