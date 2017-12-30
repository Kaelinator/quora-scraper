const got = require('got')
const parse = require('./parsers/parser.js')

const scrapeFor = (profile) => 
	got(`https://www.quora.com/profile/${profile}`)
		.then(response => response.body)
		.then(parse.profile)

const quora = module.exports = (profile) => scrapeFor(profile)

scrapeFor('Kael-Kirk')
	.then(console.log)