const assert = require('assert')
const quora = require('../index.js')

describe('quora', function() {

  it('should return null for unfilled values', function() {

    quora('Marcus-Bowdidge-1').then((profile) => assert.equal(null, profile.totalViews))
  })
})
