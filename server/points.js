/* 
 * Custom methods
 */
DaigoPoints.add = function (points, userId) {
  return DaigoPoints.insert({
    points: points,
    userId: userId
  });
};

/*
 * Hooks
 */
DaigoPoints.before.insert(function (userId, doc) {
  doc.date = new Date();
});
