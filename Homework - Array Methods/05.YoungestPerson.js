//Write a function that finds the youngest male person in a given array of people and prints his full name
//Use only array methods and no regular loops (for, while)
//Use Array#find

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

if (!Array.prototype.find) {
    Array.prototype.find = function (callback) {
        var i, 
            len = this.length;
        for (i = 0; i < len; i += 1) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
    };
}

var youngestMale =
    peoples.sort(function (a, b) {
        return a.age - b.age;
    }).find(function (obj) {
        return obj.gender == 'male';
    });

console.log(youngestMale.firstname, youngestMale.lastname );