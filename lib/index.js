'use strict'

const { toISO } = require('uic-codes')

const isUicLocationCode = code => {
	if (typeof code !== 'string') return false
	if (code.length !== 7) return false
	const numericOnly = code.replace(/[^0-9.]/g, '')
	if (code !== numericOnly) return false
	const countryCode = numericOnly.slice(0, 2)
	if (!toISO[countryCode]) return false
	return true
}

module.exports = isUicLocationCode
