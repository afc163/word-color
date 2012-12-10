define("afc163/word-color/1.0.0/word-color-debug", [], function(require, exports, module) {

    var MAGIC_NUMBER = 5;

    var COLOR_LIMITE = [60, 242];

    var wordColor = function(word) {
        
        word = word.trim();
        var rgb = [0, 0, 0];
        
        for (var i=0; i<word.length; i++) {
            var level = parseInt(i/rgb.length);
            rgb[i%3] += parseInt(getAHashNum(word[i]) / getRatio(level));
            
            if (rgb[i%3] > COLOR_LIMITE[1]) {           // avoid too light
                rgb[i%3] = COLOR_LIMITE[1];
            } else if (rgb[i%3] < COLOR_LIMITE[0]) {    // avoid too dark
                rgb[i%3] = COLOR_LIMITE[0];
            }
        }

        return 'rgb(' + rgb.join(',') + ')';

    };
    
    function getRatio(level) {
        return Math.pow(MAGIC_NUMBER, level);         
    }

    function getAHashNum(char) {
        return parseInt((char.charCodeAt() << MAGIC_NUMBER) % 242);
    }

    module.exports = wordColor;

});

