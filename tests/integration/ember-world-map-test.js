import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-world-map', 'Integration | Component | ember-world-map', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{ember-world-map}}`);
  assert.equal(this.$(".ember-world-map").length, 1);
});
