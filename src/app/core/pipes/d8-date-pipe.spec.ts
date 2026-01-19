import {D8DatePipe} from './d8-date-pipe';

describe('D8DatePipe', () => {
  let d8pipe: D8DatePipe;

  beforeEach(() => {
    d8pipe = new D8DatePipe();
  });

  it('should create an instance', () => {
    expect(d8pipe).toBeTruthy();
  });

  it('should format \'20230124\' as \'01/24/2023\'', () => {
    const output = d8pipe.transform('20230124');
    expect(output).toBe('01/24/2023');
  });

  it('should format \'20230124123456\' as \'20230124123456\'', () => {
    const output = d8pipe.transform('20230124123456');
    expect(output).toBe('20230124123456');
  });
});
