//   For in loop

const myObject = {
    js: 'JavaScript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'Swift by Apple'
}


for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["Js","Ruby", "py", "java","cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(map[key]);
} // no output because maps are not itterateable

