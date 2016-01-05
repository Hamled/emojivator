import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('emojivator-unit', 'Integration | Component | emojivator unit', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{emojivator-unit}}`);

  assert.equal(this.$().text().trim(), 'Go!');
});

test('it translates emoji sequences', function(assert) {
  this.set('input', 'ab');

  this.render(hbs`{{emojivator-unit}}`);
  assert.equal(this.$('.emojivator-unit-input input').text(), 'c');

  this.$('button').click();

  assert.equal(this.$('.emojivator-unit-output p').text(), 'c');
});
