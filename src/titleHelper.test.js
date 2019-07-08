import { generateTitle } from './titleHelper';

test('generateTitle - replaceText', () => {
  expect(generateTitle('test', 'original title', true)).toBe('test');
});

test('generateTitle - do not replaceText', () => {
  expect(generateTitle('test', 'original title', false)).toBe('(test) original title');
});