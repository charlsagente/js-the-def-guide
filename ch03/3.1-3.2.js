// Arithmetic in JS
Math.pow(2, 53) // 9007199254740992: 2 to the power 53
Math.round(.6) // 1: round to the nearest int
Math.ceil(.6) // 1: round up to an integer
Math.floor(.6) // 0: round down to an int
Math.abs(-5) // 5: absolute value
Math.max(x, y, z) // Return the largest argument
Math.min(x, y, z) // Return the smallest argument
Math.random() // Pseudo-random number x where 0 <= x < 1.0
Math.PI // circunference of a circle
Math.E // The base of the natural logarithm
Math.sqrt(3) // 3**0.5: the square root of 3
Math.pow(3, 1 / 3) // The cube root of 3
Math.sin(0) // Trigonometry: also Math.cos, Math.atan, etc.
Math.log(10) // Natural log of 10
Math.log(100) / Math.LN10 // Base 10 log of 100
Math.log(512) / Math.LN2 // Base 2 log of 512
Math.exp(3) // Math.E cubed

// ES6 defines more fn on the Math ob

Math.cbrt(27) // 3: cube root
Math.hypot(3, 4) // 5: square root of sum of squares of all args
Math.log10(100) // 2: Base-10 log
Math.log2(1024) // 10: Base-2 log
Math.log1p(x) // Natural log of (1 + x); accurate for very small x
Math.expm1(x) // Math.exp(x)-1; the inverse of the previous operation
Math.sign(x) // -1, 0 or 1 for arguments <, == , or > 0
Math.imul(2, 3) // 6: optimized for multiplication of 32-bit int
Math.clz32(0xf) // 28: number of leading zero bits in a 32-bit integer
Math.trunc(3.9) // 3: convert to an int by truncating fractional part
Math.fround(x) // Round to nearest 32-bit float number
Math.sinh(x) // Hyperbolic sine. Also Math.cosh(), Math.tanh().
Math.asinh(x) // Hyperbolic arcsine. Also Math.acosh(), Math.atanh().

Infinity // A positive number too big to represent
Number.POSITIVE_INFINITY // Same value
1/0 // => Infinity
Number.MAX_VALUE * 2 // => Infinity; overflow
-Infinity // A negative number too big to represent
Number.NEGATIVE_INFINITY // The same value
-1/0 // => -Infinity
-Number.MAX_VALUE * 2 // -Infinity

NaN // The not-a-number value
Number.NaN // The same value, written another way
0/0 // => NaN
Infinity/Infinity // => NaN

Number.MIN_VALUE/2 // => 0: underflow
-Number.MIN_VALUE/2 // -0: negative zero
-1/Infinity // -> -0: also negative 0
-0


// The following number properties are defined in ES6
Number.parseInt() // Same as the global parseInt fn
Number.parseFloat() // Same as the global parseFloat fn
Number.isNaN(x) // Is x the NaN value?
Number.isFinite(x) // Is x a number and finite?
Number.isInteger(x) // Is x an integer?
Number.isSafeInteger(x) // Is x an integer -(2**53) < x < 2**53 ?
Number.MIN_SAFE_INTEGER // -(2**53 - 1)
Number.MAX_SAFE_INTEGER // (2**53) - 1
Number.EPSILON // => 2**-52: Smallest difference between numbers

let zero = 0; // Regular zero
let negz = -0; // Negative zero
zero === negz // => true: zero and negative zero are equal
1/zero === z/negz // => false: Infinity and -Infinity are not equal


// Binary Floating-Point and Rounding Errors
let x = .3 - .2; // thirty cents minus 20 cents
let y = .2 - .1; // twenty cents minus 10 cents
x === y // => false: the two values are not the same!!
x === .1 // => false: .3-.2 is not equal to .1
y === .1 // => true: .2-.1 is equal to .1
x // 0.09999999999999998!!  This is why we should always use integers
y // 0.1

// BigInt literals are written as a string of digits followed by a lowercase letter n.
// By default in base 10 but you can use other bases.


1234n // A not-so-bigInt literal
0b111111n // A binary bigint
0x8000000000000n // => 2n**63n: A 64-bit integer
BigInt(Number.MAX_SAFE_INTEGER) // => 90xxxxxxxxx991n
let string = "1" + "0".repeat(100);
BigInt(string); // => 10n**100n:
// Arithmetic with BigInt values works like arithmetic with regular JS number, just don't mix them.
// Comparison operators works well with mixed types, except for the === explicit which checks for type equality as well.

// Dates and Times
// Dates objects in JS have a numeric representation as a timestamp that specifies the number of elapsed milliseconds
// since January 1, 1970.

let timestamp = Date.now(); // The current time as a timestamp (a number).
let now = new Date(); // The current time as a Date object
let ms = now.getTime(); // Convert to a millisecond timestamp - 1691468706894
let iso = now.toISOString() // Covert to a string in standard format - '2023-08-08T04:25:06.894Z'

