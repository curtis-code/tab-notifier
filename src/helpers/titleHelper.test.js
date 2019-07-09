import { generateTitle } from './titleHelper';

jest.mock('../state', () => ({
  originalTitle: 'original title'
}));

describe('generateTitle', () => {
  it('replace text', () => {
    expect(generateTitle('test', true)).toBe('test');
  });

  it('do not replace text', () => {
    expect(generateTitle(1, false)).toBe('(1) original title');
  });
});