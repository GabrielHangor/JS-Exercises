
let findTheOldest = function (people) {
  people.forEach((person) => {
    if (!person.yearOfDeath) {
      person.yearOfDeath = new Date().getFullYear();
    }
  });

  const oldest = people.sort((a, b) => {
    return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
  });
  return oldest[oldest.length - 1];
};



module.exports = findTheOldest;
