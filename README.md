Continuous integrations
==============
Travis is a dead-easy CI that has this nice little badge to visually show the current build status:

![Travis build status](https://api.travis-ci.org/tbuchok/travis-example.png)

Moving even further beyond Travis, is Testling which provides for a variety of browser testing. The below will fail in IE7 and IE8 because `Object.keys` was used. Oh no!

![Browser support](http://ci.testling.com/tbuchok/travis-example.png)