
// function print(person) {
//     console.log(person.name);
// }

// const person = {
//     name: 'jo'
// };

// print(person);



/* null 체킹 */
// function print(person) {
//     if (person === undefined || person === null) {
//         return;
//     }
//     console.log(person.name);
// }

// const person = null

// print(person);

/* null 체킹 간결화 */
function print(person) {
    if (!person) {
        return;
    }
    console.log(person.name);
}

const person = null

print(person);


