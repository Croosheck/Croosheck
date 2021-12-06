let a = prompt("gwgweg");
let b = prompt("gwgweg");
let c = prompt("gwgweg");
function add(a,b,c) {
    if (a === undefined || typeof a === "string") {a = 0} else {a=a};
    if (b === undefined || typeof b === "string") {b = 0} else {b=b};
    if (c === undefined || typeof c === "string") {c = 0} else {c=c};
    console.log(`${a} + ${b} + ${c}`);
    return a+b+c;
}
console.log(add(a,b,c));


/*function add(a,b,c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    console.log(`${a} + ${b} + ${c}`);
    return a+b+c;
}
console.log(add());
*/
