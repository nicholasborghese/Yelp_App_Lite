import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | searched', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:searched');
    assert.ok(route);
  });
});
