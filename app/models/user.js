import DS from 'ember-data';

export default DS.Model.extend({
  currentProblem: DS.belongsTo("problem"),
  emojiMap: DS.attr(""),
  history: DS.attr(""),

  buildEmojiMap: function() {
    return {
      a: '🐱',
      b: '🐷',
      c: '🐎',
      d: '🐢',
      e: '🐒',
      f: '🌵',
      g: '🌷',
      h: '🍄',
      i: '🌳',
      j: '🍎',
      k: '🍊',
      l: '🍌',
      m: '🍉',
      n: '🍆',
      o: '🌽',
      p: '🍗',
      q: '🍔',
      r: '🍕',
      s: '🍣',
      t: '🍦',
      u: '🍭',
      v: '🍪',
      w: '🏆',
      x: '🚗',
      y: '🎸',
      z: '🚀'
    };
  }
});
