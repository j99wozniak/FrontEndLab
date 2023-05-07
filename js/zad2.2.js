
function ex2(peeps){
    console.log("\\\\ Wszystkie kobiety: ");
    console.log(peeps.filter(e => e.gender=="F"))

    console.log("\\\\ Wszystkie osoby starsze niż 30 lat: ");
    console.log(peeps.filter(e => e.age > 30))

    console.log("\\\\ Wszystkie osoby z trójką dzieci: ");
    console.log(peeps.filter(e => e.childs.length==3))
    

    console.log("\\\\ Wszystkie osoby z dwójką córek: ");
    console.log(peeps.filter(e => e.childs.filter(c => c.gender=="F").length==2))

    console.log("\\\\ Wszystkie osoby z dwójką dzieci starszymi niż 10 lat: ");
    console.log(peeps.filter(e => e.childs.length==2 && e.childs.filter(c => c.age>10).length==2))

    console.log("\\\\ Wszystkie osoby i dzieci młodsze niż 20 lat: ");
    console.log(peeps.flatMap(p => [p, p.childs].flat()).filter(e => e.age<20));
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