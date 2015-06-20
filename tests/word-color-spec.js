var wordColor = require('../');
var expect = require('expect.js');

describe('word-color', function () {

  it('normal usage', function () {
    expect(wordColor('words')).to.be('rgb(188,174,18)');
    var rgb = JSON.stringify(wordColor.rgb('words'));
    expect(rgb).to.be(JSON.stringify([188,174,18]));
  });

  it('long words', function () {
    expect(wordColor('longlonglongwords')).to.be('rgb(104,184,167)');
  });

});
