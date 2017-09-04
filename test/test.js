const assert = require('assert')
const quora = require('../index.js')

describe('quora', function() {

  it('returns null for unfilled values', function() {

    quora('Kael-Kirk').then((profile) => assert.equal(null, profile.totalViews))
    // quora('Marcus-Bowdidge-1').then((profile) => assert.equal(null, profile.totalViews))
  })
})
