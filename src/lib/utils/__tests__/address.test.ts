import * as address from '../address';

describe('#getStateAbbreviation', () => {
  describe('when the state does not exist in the list', () => {
    it('should return state as is', () => {
      expect(address.getStateAbbreviation('Taylor Swift')).toEqual(
        'Taylor Swift',
      );
    });
  });

  describe('when the state does exist in the list', () => {
    it('should return state abbreviation', () => {
      expect(address.getStateAbbreviation('TeXaS')).toEqual('TX');
      expect(address.getStateAbbreviation('Co')).toEqual('CO');
      expect(address.getStateAbbreviation('ColoradO')).toEqual('CO');
    });
  });
});
