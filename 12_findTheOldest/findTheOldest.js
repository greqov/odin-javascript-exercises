const findTheOldest = function () {
  const [people] = [...arguments];

  // get lifetime arr
  const lifetime = people.map((user) => {
    const currentYear = new Date().getFullYear();
    const yearOfDeath = user.yearOfDeath || currentYear;
    return yearOfDeath - user.yearOfBirth;
  });

  // get index of the max lifetime
  const max = Math.max(...lifetime);
  const index = lifetime.findIndex((i) => i === max);

  // return user obj with index
  return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
