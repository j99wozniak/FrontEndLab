
function ex2(peeps){
    console.log("\\\\ Wszystkie kobiety: ");
    peeps.forEach(element => {
        if(element.gender=="F"){
            console.log(element.firstName);
        }
    });

    console.log("\\\\ Wszystkie osoby starsze niż 30 lat: ");
    peeps.forEach(element => {
        if(element.age>30){
            console.log(element.firstName + ", lat: " + element.age);
        }
    });

    console.log("\\\\ Wszystkie osoby z trójką dzieci: ");
    peeps.forEach(element => {
        if(element.childs.length==3){
            let children = "";
            element.childs.forEach(child => children += child.firstName+"; ")
            console.log(element.firstName + ": " + children);
        }
    });
    

    console.log("\\\\ Wszystkie osoby z dwójką córek: ");
    peeps.forEach(element => {
        let daughters = "";
        let daughter_count = 0;
        element.childs.forEach(child => {
            if(child.gender=="F"){
            daughters += child.firstName+"; ";
            daughter_count += 1;
            }
        });
        if(daughter_count==2){
            console.log(element.firstName + ": " + daughters);
        }
    });

    console.log("\\\\ Wszystkie osoby z dwójką dzieci starszymi niż 10 lat: ");
    peeps.forEach(element => {
        if(element.childs.length==2){
            let children = "";
            let old_children_count = 0;
            element.childs.forEach(child => {
                if(child.age>10){
                    children += child.firstName+"; ";
                    old_children_count += 1;
                }
            });
            if(old_children_count==2){
                console.log(element.firstName + ": " + children);
            }
        }
    });

    console.log("\\\\ Wszystkie osoby i dzieci młodsze niż 20 lat: ");
    peeps.forEach(element => {
        if(element.age<20){
            console.log(element.firstName + " (osoba)");
        }
        element.childs.forEach(child => {
            if(child.age<20){
                console.log(child.firstName + " (dziecko)");
            }
        });
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