console.log('Hello JavaScript Console!');

// Working with Arrays and Objects

// Primitive Datatypes: Number, String, Boolean
// Complex / Meta Datatypes: Array, Object, Function, Variable
                             // Collections

// Array can hold many values in an ordered list of all datatypes.
// Ex. [1, 2, 3, "Hello", [1, 1, 1], {word: "Definition"}, 45.7];

var myArray = [
  1,
  2,
  3,
  "Hello",
  [1, 1, 1],
  {word: "Definition"},
  45.7
];

// Objects can hold many values in an *unordered* list of key value pairs.
// The dot "." syntax always refers to accessing the property or 'key' of an object.
var myObject = {
  name:               "Jeffrey",
  age:                26,
  'first-girlfriend': "Billy",
  dad:                "Walter",
  siblings:           ["Amy", "Lucy", "Gwendolyn", "Sarah", "Betsey", "Don"]
};

// Two ways of accessing the value "Betsey" from myObject.
myObject['siblings'][4];
myObject.siblings[4];