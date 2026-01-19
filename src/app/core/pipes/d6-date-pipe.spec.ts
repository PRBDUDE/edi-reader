import {D6DatePipe} from './d6-date-pipe';

describe('D6DatePipe', () => {
  let d6pipe: D6DatePipe;

  beforeEach(() => {
    d6pipe = new D6DatePipe();

  })
  it('create an instance', () => {
    expect(d6pipe).toBeTruthy();
  });

  it('should format \'240127\' as \'01/27/2024\'', () => {
    const output = d6pipe.transform('240127');
    expect(output).toBe('01/27/2024');
  });

  it('should format \'240127123456\' as \'240127123456\'', () => {
    const output = d6pipe.transform('240127123456');
    expect(output).toBe('240127123456');
  });
});
