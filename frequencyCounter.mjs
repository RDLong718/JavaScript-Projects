import { frequencies } from "underscore";
// Array
var array = ["Geeks", "Geeks", "GFG",
    "Computer_Science_Portal",
    "Geeks", "GFG"
];

var obj = frequencies(array);
console.log("Original Array : ", array);
console.log("Generated Mapping Object: ", obj);