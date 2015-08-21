//Write a function for creating persons.
//Each person must have firstname, lastname, age and gender (true is female, false is male)
//Generate an array with ten person with different names, ages and genders

function makePerson(firstName, lastName, age, gender) {
    return {
        firstname: firstName,
        lastName: lastName,
        age: age,
        gender: !gender ? 'male' : 'female'
    }
}

console.log ([
	new makePerson('Doncho', 'Minkov', 25, false),
	new makePerson('Nikolay', 'Kostov', 24, false),
	new makePerson('Ivaylo', 'Kenov', 26, false),
	new makePerson('Pavel', 'Kolev', 25, false),
	new makePerson('Slavi', 'Slavov', 23, false),
	new makePerson('Evgeni', 'Evgeniev', 18, false),
	new makePerson('Anna', 'Ivanova', 23, true),
	new makePerson('Borqna', 'Petrova', 20, true),
	new makePerson('Svetlina', 'Sandova', 24, true),
	new makePerson('Mariq', 'Veselinova', 18, true)
]);
