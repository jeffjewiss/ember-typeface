import { module, test } from 'qunit'
import { currentURL, visit } from '@ember/test-helpers'
import { setupApplicationTest } from 'ember-qunit'
import { percySnapshot } from 'ember-percy'

module('Acceptance | sanity check', function (hooks) {
  setupApplicationTest(hooks)

  test('visiting /', async function (assert) {
    await visit('/')

    assert.equal(currentURL(), '/')

    percySnapshot('dummy app')
  })
});
