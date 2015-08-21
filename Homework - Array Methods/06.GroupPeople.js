//Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
//Use Array#reduce
//Use only array methods and no regular loops (for, while)

function makePerson(firstName, lastName, age, gender) {
    return {
        firstname: firstName,
        lastname: lastName,
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

var groupPeoples = peoples.reduce(function (gr, obj) {
    var letter = obj.firstname[0];

    if (gr[letter]) {
        gr[letter].push(obj);
    } else {
        gr[letter] = [obj];
    }

    return gr;
}, {});

console.log(groupPeoples)