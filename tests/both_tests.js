Tinytest.add('Exists DaigoPoints Collection', function (test) {
  test.notEqual(DaigoPoints, 'undefined');
  test.notEqual(DaigoPoints.find, 'undefined');
});

