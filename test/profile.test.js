
const test = require('tape')
const profiles = require('./data/profile.data.js')
const parse = require('../parsers/profile.js')

test('quora', t => {

	profiles.forEach((profile) => {
		t.same(parse.profile(profile.html), profile.expected, profile.msg)
	})

	t.end()
})
