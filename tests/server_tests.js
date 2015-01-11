Tinytest.add('It should add points to an user', function (test) {
  var userId = Meteor.users.insert({});
  var _id = DaigoPoints.add(1, userId);
  var cursor = DaigoPoints.find({_id: _id});
  var doc;

  test.equal(cursor.count(), 1);

  doc = cursor.fetch()[0];
  test.equal(doc.userId, userId);
  test.equal(doc.points, 1);
});

Tinytest.add('It should add timestamp to DaigoPoints docs', function (test) {
  var userId = Meteor.users.insert({});
  var _id = DaigoPoints.add(1, userId);
  var doc = DaigoPoints.findOne({_id: _id});

  test.isTrue(doc.date instanceof Date);
});
