define(function(require) {

    var wordColor = require('word-color');
    var expect = require('expect');

    describe('word-color', function() {

        it('normal usage', function() {
            expect(wordColor('words')).to.be('rgb(188,174,18)');
        });
    });

});

