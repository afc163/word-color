var wordColor = require('../src/word-color');
var expect = require('expect.js');

describe('word-color', function () {

  it('normal usage', function () {
    expect(wordColor('words')).to.be('rgb(188,174,18)');
    expect(wordColor.rgb('words')).to.be([188,174,18]);
  });

  it('long words', function () {
    expect(wordColor('longlonglongwords')).to.be('rgb(104,184,167)');
  });

});
