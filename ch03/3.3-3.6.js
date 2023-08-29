// Text
let euro = "€";
let love = "❤️";
euro.length // => 1; this character has one 16-bit element.
love.length // => 2: UTF-16 encoding of ❤️ is "/ud83d/udc99"

// Examples of string literals:
"" // The empty string: is has zero characters
'testing'
"3.14"
'name="myform"'
"Wouldn't you prefer O'Reilly's book?"
"t is the ratio of a circle's circumference to its radius"
`"She said 'hi'", he said.`

// A string representing 2 lines written in one line:
'two\nlines'

// A one-line string written on 3 lines:
"one\
long\
line"

// A two-line string written on two lines:
// This is a ES6 feature using backticks
`the newline character at the end of this line
is included literally in this string`

// The scape character '\'
'You\'re right, it can\'t be a quote'

// Javascript escape sequences
`
\0 // The null character
\b // Backspace
\t // Horizontal tab
\n // New line
\v // Vertical tab
\f // Form feed
\r // Carriage return
\" // Double quote
\' // Apostrophe or single quote    
\\ // Backslash
\xnn // The Unicode character specified by the two hexadecimal digits nn
\unnn // The Unicode character specified by the fhour hexadecimal digits nnnn
\u{n} // The Unicode character specified by the codepoint n, where n is one to six hexadecimal digits between 0 and 10FFFF (ES6)    
`

let msg = "Hello, " + "world"; // Produces the string, "Hello, world"
let greeting = "Welcome to my blog," + " " + name;

`String can be compared with the standard === equality and !=== operators:
String comparison is done simply by comparing the 16-bit values.
`

s.length // To determine the length of a string; the number of 16-bit values it contains

let s = "Hello, world"; // Start with some text

// Obtaining portions of a string
s.substring(1, 4) // "ell": the 2nd, 3rd, and 4th characters.
s.slice(1, 4) // "ell" the same thing
s.slice(-3) // "rld" the last 3 characters
s.split(", ") // ["Hello", "world"]

// Searching a string
s.indexOf("l") // 2: position of the first letter l
s.indexOf("l", 3) // 3: position of first "l" at or after 3
s.indexOf("zz") // -1: s does not include the substring "zz"
s.lastIndexOf("l") // 10: position of last letter l

// Boolean searching functions in ES6 and later
s.startsWith("Hell") // true: the string starts with these
s.endsWith("!") // false: s does not end with that
s.includes("or") // true: s includes or

// Creating modified versions of a string
s.replace("llo", "ya") // "Heya, world"
s.toLowerCase() // "hello, world"
s.toUpperCase() // "HELLO, WORLD"
s.normalize() // Unicode NFC normalization: ES6
s.normalize("NFD") // NFD normalization.


// Inspecting individual (16-bit) characters of a string
s.charAt(0) // "H": the first character
s.charAt(s.length-1) // "d" the last character
s.charCodeAt(0) // 72: 16-bit number at the specified position
s.codePointAt(0) // 72: ES6, works for codepoints > 16 bits

// String padding functions in ES2017
"x".padStart(3) // "  x" add spaces on the left to a length of 3
"x".padEnd(3) // "x   " add spaces on the right to a length of 3
"x".padStart(3, "*") // "**x" add start on the left to a length of 3
"x".padEnd(3, "-") // "x--" add dashes on the right to a length of 3

// Space trimming functions. trim() is ES5
"  test  ".trim() // "test": remove spaces at start and end
"  test   ".trimStart() // "test   ": remove spaces on left. Also trimleft
"  test    ".trimEnd() // "   test": remove spaces at right. Also trimRight.

// Miscellaneous string methods
s.concat("!") // "Hello, world!" just use the + operator instead
"<>".repeat(5) // "<><><><><>" concatenate n copies. ES6.

// Strings can be treated as read-only arrays.
let s = "hello, world"
s[0] // "h"
s[s.length - 1] // "d"

