import * as R from 'ramda'

export const ensureArray = R.ifElse(R.is(Array), R.identity, value => [value])
