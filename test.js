'use strict'

const tape = require('tape')
const check = require('.')

tape('is-uic-location-code', t => {
	t.true(check('8000000'), 'correct code')
	t.true(check('7292010'), 'correct code')
	t.false(check('72920109'), 'incorrect code, too long')
	t.false(check('8092010999'), 'incorrect code, too long')
	t.false(check('87-0002'), 'incorrect code, contains non-numerical characters')
	t.false(check('87a-0v2'), 'incorrect code, contains non-numerical characters')
	t.false(check('80-00001'), 'incorrect code, contains non-numerical characters')
	t.false(check('008000002'), 'incorrect code, padded with zeros')
	t.false(check('729201'), 'incorrect code, too short')
	t.false(check('80'), 'incorrect code, too short')
	t.false(check('1500002'), 'incorrect code, invalid country')
	t.false(check('3792102'), 'incorrect code, invalid country')
	t.false(check(null), 'incorrect code, null')
	t.false(check('0'), 'incorrect code, too short')
	t.false(check(NaN), 'incorrect code, NaN')
	t.false(check(undefined), 'incorrect code, undefined')
	t.false(check(8000000), 'incorrect code, number')
	t.false(check({ code: '8000000' }), 'incorrect code, object')
	t.end()
})
