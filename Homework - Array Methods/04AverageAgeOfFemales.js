//Write a function that calculates the average age of all females, extracted from an array of persons
//Use Array#filter
//Use only array methods and no regular loops (for, while)

function makePerson(firstName, lastName, age, gender) {
    return {
        firstname: firstName,
        lastName: lastName,
        age: age,
        gender: !gender ? 'male' : 'female'
    }
}

var peoples = [
	new makePerson('Doncho', 'Minkov', 25, false),
	new makePerson('Nikolay', 'Kostov', 24, false),
	new makePerson('Ivaylo', 'Kenov', 26, false),
	new makePerson('Pavel', 'Kolev', 25, false),
	new makePerson('Slavi', 'Slavov', 16, false),
	new makePerson('Evgeni', 'Evgeniev', 17, false),
	new makePerson('Anna', 'Ivanova', 23, true),
	new makePerson('Borqna', 'Petrova', 15, true),
	new makePerson('Svetlina', 'Sandova', 17, true),
	new makePerson('Mariq', 'Veselinova', 21, true)
];

function averageAgeOfFemales(arr) {
    var females = arr.filter(function (obj) {
        return obj.gender == 'female';
    });

    var avg,
        sum = 0;
    females.forEach(function (obj) {
        sum += obj.age;
    });
    avg = sum / females.length;

    return avg;
}
console.log('Average age is: ');
console.log(averageAgeOfFemales(peoples));