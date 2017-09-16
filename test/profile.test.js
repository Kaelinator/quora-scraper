
const test = require('tape')
const fs = require('fs')
const parse = require('../parsers/profile.js')

const profiles = [

	{

		html: 'test/data/fullProfile.html',
		msg: 'returns expected parsed profile',
		expected: {

			user: 'Kael Kirk',
		  picture: 'https://qph.ec.quoracdn.net/main-thumb-110323423-50-xoeyjvjqbxviswiovjvldtobhaywqydo.jpeg',
		  credential: '/kāl/ - Runner, developer, creator',
		  answers: 68,
		  questions: 20,
		  posts: 3,
		  blogs: 2,
		  followers: 46,
		  following: 24,
		  topics: 70,
		  edits: 609,
		  totalViews: 44700,
		  monthlyViews: 6200
		}
	},

	{

		html: 'test/data/emptyProfile.html',
		msg: 'returns null for unfilled profile categories',
		expected: {
			user: 'Dan Levy',
		  picture: 'https://qph.ec.quoracdn.net/main-thumb-110323423-50-xoeyjvjqbxviswiovjvldtobhaywqydo.jpeg',
		  credential: null,
		  answers: 0,
		  questions: 0,
		  posts: 0,
		  blogs: 0,
		  followers: 1,
		  following: 1,
		  topics: 25,
		  edits: 1,
		  totalViews: null,
		  monthlyViews: null
		}
	}

]

test('quora', t => {

	profiles.forEach((profile, index) => {

		fs.readFile(profile.html, 'utf8', (err, data) => {

			if (err) throw err

			t.same(parse.profile(data), profile.expected, profile.msg)
		})
	})

	t.end()
})
