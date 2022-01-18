const findTheOldest = function () {
  const [people] = [...arguments];

  function getYearOfDeath(person) {
    return person.yearOfDeath || new Date().getFullYear();
  }

  // 1. With reduce method
  return people.reduce((prev, curr) => {
    const prevLifetime = getYearOfDeath(prev) - prev.yearOfBirth;
    const currLifetime = getYearOfDeath(curr) - curr.yearOfBirth;

    return prevLifetime > currLifetime ? prev : curr;
  });

  // 2. With map method
  const lifetime = people.map((user) => getYearOfDeath(user) - user.yearOfBirth);
  const max = Math.max(...lifetime);
  const index = lifetime.findIndex((i) => i === max);

  return people[index];
};;

// Do not edit below this line
module.exports = findTheOldest;
