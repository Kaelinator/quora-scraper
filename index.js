const got = require('got')
const parse = require('./parsers/parser.js')

const scrapeFor = (profile) => {

	const url = `https://www.quora.com/profile/${profile}`

	return got(url)
		.then(parse.profile)
}

const quora = module.exports = (profile) => scrapeFor(profile)
