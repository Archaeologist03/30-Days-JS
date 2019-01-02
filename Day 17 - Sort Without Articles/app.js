const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled',
    'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];
// Get bands ul from DOM
const bandsUL = document.querySelector("#bands");

// Regex pattern for removing the/a/an and space after till next word, only at the beginning of the word
let regex = /^the\s|^a\s|^an\s/i;

// make new bands arr without matched regex words and sort it out by alphabet
let newBands = bands.map(band => band.replace(regex, ""));
let sortedBands = newBands.sort();
let final = [];

// check each band for new position(index)
bands.forEach(band => {
    for (let i = 0; i < sortedBands.length; i++) {
        if (band.includes(sortedBands[i])) {
            final[i] = band; 
        }
    }
});

// Add each band to ul
final.forEach(band => {
    let child = document.createElement("li");
    child.textContent = band;
    bandsUL.appendChild(child);
})








































// let newBands = []
// bands.forEach(band => newBands.push(band.toLowerCase().replace(regex, "")));

// let sorted = newBands.sort();

// let final = [];
// sorted.forEach(sortedBand => {
//     for (let i = 0; i < bands.length; i++) {
//         console.log(bands[i]);
//         if (sortedBand.includes(bands[i])) {
//             final.push(bands[i]);
//         }
//     }
// });

// console.log(final);


// // let match = /^the\s|^a\s|^an\s/i
// // bands.sort((a, b) => {
// //     a.includes
// // })