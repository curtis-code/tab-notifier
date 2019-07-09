import state from '../state';
import { displayNotification } from './notificationHelper';

jest.mock('../state', () => ({
  notificationDisplayed: false,
  originalTitle: 'original title'
}));

const document = {
  title: 'original title'
};

describe('displayNotification', () => {
  it('update title and set state', () => {
    displayNotification(document, false, 1);
    expect(document.title).toBe('(1) original title');
    expect(state.notificationDisplayed).toBe(true);
  });
});