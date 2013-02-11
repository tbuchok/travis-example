var test = require('tap').test

test('out travis and tap', function(t) {
  var result = true;
  t.ok(result, 'The result was great!');
  var psuedo = null;
  t.notOk(psuedo, 'The result was expected to be `null`!');
  var obj = { a : 'a', b : 'b', c : 'c' };
  t.equal(Object.keys(obj).length, 3, 'one equals one');
  t.end();
});