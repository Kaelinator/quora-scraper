
const tape = require('tape').test
const quora = require('../index.js')

tape('quora', t => {

	quora('Marcus-Bowdidge-1').then((result) => {

		t.equal(null, result.totalViews, 'returns null for unfilled values')
		t.end()
	})

	// quora('Kael-Kirk').then((result) => {
	//
	// 	t.equal(null, result.totalViews, 'returns null for unfilled values')
	// 	t.end()
	// })
})
