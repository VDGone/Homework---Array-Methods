//Write a function that prints all underaged persons of an array of person
//Use Array#filter and Array#forEach
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

var underAge = peoples.filter(function (obj) {
    return obj.age < 18;
}).forEach(function (obj) {
    console.log(obj);
});