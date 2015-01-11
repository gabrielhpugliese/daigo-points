DaigoPoints = new Meteor.Collection();

/* 
 * Custom methods
 */
DaigoPoints.getTotal = function (userId) {
  var cursor = DaigoPoints.find({userId: userId}, {fields: {'points': 1}});

  return _.reduce( _.pluck(cursor.fetch(), 'points'), function (total, val) {
    return total + val;
  }, 0);
};
