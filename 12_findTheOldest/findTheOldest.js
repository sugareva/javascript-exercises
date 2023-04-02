const findTheOldest = function(people) { 
    let thisYear =  new Date().getFullYear();
    const ages = people.map(person => {
       const yearIfNotDead = person.yearOfDeath ?? thisYear;
       const age = yearIfNotDead - person.yearOfBirth;
       if (person.yearOfDeath < 2023){
        return { name: person.name, dead : "yes", age: age };
       }
        return { name: person.name, dead : "no", age: age };
    });
    const ordered = ages.sort((a, b) => a.age > b.age ? -1 : 1);
    return ordered[0];
 };
// Do not edit below this line
module.exports = findTheOldest;
