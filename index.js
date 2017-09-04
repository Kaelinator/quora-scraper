const got = require('got')
const parse = require('./parsers.js')

const scrapeFor = (profile) => {

	const url = `https://www.quora.com/profile/${profile}`

	return got(url)
		.then(parse.profile)
		.catch(() => null)
}

const quora = module.exports = (profile) => scrapeFor(profile)
