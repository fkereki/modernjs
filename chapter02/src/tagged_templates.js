function showAge(strings, name, year) {
    const currYear = new Date().getFullYear();
    const yearsAgo = currYear - year;
    return (
        strings[0] + name + strings[1] + year + `, ${yearsAgo} years ago`
    );
}

const who = "Prince Valiant";
const when = 1937;
const output1 = showAge`The ${who} character was created in ${when}.`;
console.log(output1);
// The Prince Valiant character was created in 1937, 81 years ago

const model = "Suzuki";
const yearBought = 2009;
const output2 = showAge`My ${model} car was bought in ${yearBought}`;
console.log(output2);
// My Suzuki car was bought in 2009, 9 years ago
