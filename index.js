var MAGIC_NUMBER = 5;
var COLOR_LIMITE = 242;

function getRGB(word) {
  word = word.replace(/^\s+(.*)\s+$/g, '$1');
  var rgb = [0, 0, 0];
  for (var i = 0; i < word.length; i++) {
    var level = parseInt(i / rgb.length);
    rgb[i % 3] += parseInt(getAHashNum(word[i]) / getRatio(level));
  }
  for (var j = 0; j < rgb.length; j++) {
    if (rgb[j] > 255) {
      rgb[j] = 255;
    }
  }
  return rgb;
}

function wordColor(word) {
  var rgb = getRGB(word);
  return 'rgb(' + rgb.join(',') + ')';
}

function getRatio(level) {
  return Math.pow(MAGIC_NUMBER, level);
}

function getAHashNum(char) {
  return parseInt((char.charCodeAt() << MAGIC_NUMBER) % COLOR_LIMITE);
}

// export pure numbers color method
wordColor.rgb = getRGB;
module.exports = wordColor;
