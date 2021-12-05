import * as arrays from '../array'

describe('#ensureArray', () => {
  describe('when item is array', () => {
    it('should return array', () => {
      const array = [1, 2]
      expect(arrays.ensureArray(array)).toBe(array)
    })
  })

  describe('when item is not an array', () => {
    it('should return an array with item as only index', () => {
      const item = 1
      expect(arrays.ensureArray(item)).toEqual([item])
    })
  })
})
