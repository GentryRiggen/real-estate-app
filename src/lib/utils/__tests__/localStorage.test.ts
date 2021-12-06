import * as storage from '../localStorage';

beforeEach(() => {
  localStorage.clear();
});

describe('#parseItem', () => {
  describe('when item is falsy', () => {
    it('should return default value', () => {
      expect(storage.parseItem(false)).toEqual(false);
      expect(storage.parseItem(null, 'Default')).toEqual('Default');
    });
  });
});

describe('#getLocalItem', () => {
  describe('when item does not exist', () => {
    it('should return default value', () => {
      expect(storage.getLocalItem('blah', null)).toBe(null);
    });
  });

  describe('when item does exist', () => {
    it('should return item parsed', () => {
      const item = { hello: 'world' };
      localStorage.setItem('blah', JSON.stringify(item));
      expect(storage.getLocalItem('blah')).toEqual(item);
    });
  });
});

describe('#setLocalItem', () => {
  describe('when setting item in localStorage', () => {
    it('should stringify and set in localStorage', () => {
      const item = { hello: 'world' };
      storage.setLocalItem('blah', item);
      expect(localStorage.getItem('blah')).toEqual(JSON.stringify(item));
    });
  });
});
