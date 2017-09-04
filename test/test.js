const assert = require('assert')
const quora = require('../index.js')

describe('quora', function() {

	it('should return null for unidentified users', function() {

		quora('-').then((profile) => assert.equal(null, profile))
	})

  it('should return null for unfilled values', function() {

    quora('Marcus-Bowdidge-1').then((profile) => assert.equal(null, profile.totalViews))
  })
})
