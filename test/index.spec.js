var test = require('testling')

test('out travis and tap', function(t) {
  var result = true;
  t.ok(result, 'The result was great!');
  var psuedo = null;
  t.notOk(psuedo, 'The result was expected to be `null`!');
  t.equal(1, 1, 'one equals one');
  t.end();
});