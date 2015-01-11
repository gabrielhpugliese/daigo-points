Tinytest.add('It should not add points on client', function (test) {
  var userId = Meteor.users.insert({});
  test.throws(function () {
    DaigoPoints.add(1, userId);
  });
});
