var test = require('tape');

test('out continuous integrations with node-tap', function(t) {
  var result = true;
  t.ok(result, 'The result was great!');
  var psuedo = null;
  t.notOk(psuedo, 'The result was expected to be `null`!');
  var obj = { a : 'a', b : 'b', c : 'c' };
  t.equal(Object.keys(obj).length, 3, 'The objects has three keys: a, b and c!');
  t.end();
});