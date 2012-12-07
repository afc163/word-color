define(function(require, exports, module) {

    var MAGIC_NUMBER = 5;

    var wordColor = function(word) {
        
        word = word.trim();
        var rgb = [0, 0, 0];
        
        for (var i=0; i<word.length; i++) {
            var level = parseInt(i/rgb.length);
            rgb[i%3] += parseInt(getAHashNum(word[i]) / getRatio(level));
            console.log(rgb);
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

