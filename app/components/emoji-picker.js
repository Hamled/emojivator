import Ember from 'ember';

var allEmojis = [
  {
    "name": "mushroom",
    "unicode": "1F344",
    "shortcode": "mushroom",
    "description": "MUSHROOM",
    "category": "food"
  },
  {
    "name": "tomato",
    "unicode": "1F345",
    "shortcode": "tomato",
    "description": "TOMATO",
    "category": "food"
  },
  {
    "name": "eggplant",
    "unicode": "1F346",
    "shortcode": "eggplant",
    "description": "AUBERGINE",
    "category": "food"
  },
  {
    "name": "banana",
    "unicode": "1F34C",
    "shortcode": "banana",
    "description": "BANANA",
    "category": "food"
  },
  {
    "name": "pineapple",
    "unicode": "1F34D",
    "shortcode": "pineapple",
    "description": "PINEAPPLE",
    "category": "food"
  },
  {
    "name": "elephant",
    "unicode": "1F418",
    "shortcode": "elephant",
    "description": "ELEPHANT",
    "category": "animal"
  },
  {
    "name": "octopus",
    "unicode": "1F419",
    "shortcode": "octopus",
    "description": "OCTOPUS",
    "category": "animal"
  },
  {
    "name": "fish",
    "unicode": "1F41F",
    "shortcode": "fish",
    "description": "FISH",
    "category": "animal"
  },
  {
    "name": "dromedary_camel",
    "unicode": "1F42A",
    "shortcode": "dromedary_camel",
    "description": "DROMEDARY CAMEL",
    "category": "animal"
  },
  {
    "name": "icecream",
    "unicode": "1F366",
    "shortcode": "icecream",
    "description": "SOFT ICE CREAM",
    "category": "food"
  },
  {
    "name": "beer",
    "unicode": "1F37A",
    "shortcode": "beer",
    "description": "BEER MUG",
    "category": "food"
  },
  {
    "name": "whale2",
    "unicode": "1F40B",
    "shortcode": "whale2",
    "description": "WHALE",
    "category": "animal"
  },
  {
    "name": "watermelon",
    "unicode": "1F349",
    "shortcode": "watermelon",
    "description": "WATERMELON",
    "category": "food"
  },
  {
    "name": "rooster",
    "unicode": "1F413",
    "shortcode": "rooster",
    "description": "ROOSTER",
    "category": "animal"
  }
];

function getEmojiUnicode(emoji) {
  return String.fromCodePoint(parseInt(emoji["unicode"], 16));
}

String.prototype.splitByCodePoint = function() {
  if(this == null) {
    throw new TypeError();
  }

  var string = String(this);
  var numChars = string.length;
  var isSurrogate = function(codePoint) {
    return codePoint > 0xD7FF && codePoint < 0xE000;
  };

  var codePoints = [];
  for(var i = 0; i < numChars; i++) {
    if(isNaN(string.charCodeAt(i))) {
      break;
    }

    codePoints.push(string.codePointAt(i));
    if(isSurrogate(string.charCodeAt(i))) {
      i++; // Skip the next char as it's the other part of this surrogate pair
    }
  }

  return codePoints;
};

export default Ember.Component.extend({
  emojis: "",
  input: "",

  validEmojis: Ember.computed('emojis', function() {
    var emojis = this.get('emojis').splitByCodePoint();
    return emojis.map(function(item) {
      return allEmojis.findBy("unicode", item.toString(16).toUpperCase());
    });
  }),

  actions: {
    selectEmoji(emoji) {
      this.$('.emoji-picker-input').caret(getEmojiUnicode(emoji));
    }
  },

  didInsertElement() {
    this.set('register-as', this);
  }
});
