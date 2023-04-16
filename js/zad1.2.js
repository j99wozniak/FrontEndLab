
function ex2(peeps){
    console.log("Wszystkie kobiety: ");
    peeps.forEach(element => {
        if(element.gender=="F"){
            console.log(element.firstName + "\n");
        }
    });
}

var people = [
    {   firstName: 'Anna', lastName: 'Nowak', gender: 'F', age: 33, childs: [
            { firstName: 'Piotr', lastName: 'Nowak', gender: 'M', age: 15 },
            { firstName: 'Natalia', lastName: 'Nowak', gender: 'F', age: 11 }
        ]   },
    {   firstName: 'Dagmara', lastName: 'Kowalska', gender: 'F', age: 50, childs: []    },
    {   firstName: 'Andrzej', lastName: 'Wietrzyński', gender: 'M', age: 36, childs: [
            { firstName: 'Piotr', lastName: 'Nowak', gender: 'M', age: 15 },
            { firstName: 'Natalia', lastName: 'Nowak', gender: 'F', age: 11 }
        ] },
    {   firstName: 'Robert', lastName: 'Andrzejewski', gender: 'M', age: 35, childs: [
            { firstName: 'Zofia', lastName: 'Andrzejewska', gender: 'F', age: 3 },
            { firstName: 'Natalia', lastName: 'Andrzejewska', gender: 'F', age: 8 }
        ] },
    {   firstName: 'Jadwiga', lastName: 'Słoczyńska', gender: 'F', age: 48, childs: [] },
    {   firstName: 'Judyta', lastName: 'Nahita', gender: 'F', age: 23, childs: [
            { firstName: 'Ireneusz', lastName: 'Nahita', gender: 'M', age: 5 }
        ] },
    {   firstName: 'Zuzanna', lastName: 'Topolewska', gender: 'F', age: 45, childs: [
            { firstName: 'Ireneusz', lastName: 'Nahita', gender: 'M', age: 16 },
            { firstName: 'Justyna', lastName: 'Nahita', gender: 'F', age: 3 },
            { firstName: 'Milena', lastName: 'Nahita', gender: 'F', age: 9 }
        ] },
    {   firstName: 'Adam', lastName: 'Daleki', gender: 'M', age: 32, childs: [] },
    {   firstName: 'Sebastian', lastName: 'Dudkiewicz', gender: 'M', age: 19, childs: [] },
    {   firstName: 'Franciszek', lastName: 'Sypieczyk', gender: 'M', age: 51, childs: [] },
];

ex2(people);