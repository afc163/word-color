define(function(require) {

    var wordColor = require('word-color');
    var expect = require('expect');

    describe('word-color', function() {

        it('normal usage', function() {
            expect(wordColor('words')).to.be('rgb(188,174,18)');
        });

        it('long words', function() {
            expect(wordColor('longlonglongwords')).to.be('rgb(104,184,167)');
        });

    });

});

