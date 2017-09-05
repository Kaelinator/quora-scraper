
const test = require('tape')
const quora = require('../index.js')

test('quora', t => {

	quora('Marcus-Bowdidge-1').then((result) => {

		t.equal(null, result.totalViews, 'returns null for unfilled values')
		t.end()
	})
})
