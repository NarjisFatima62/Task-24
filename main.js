"use strict";
// Question No.24:
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// 1.Tests for equality and inequality with strings
// 2.Tests using the lower case function
// 3.Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// 4.Tests using "and" and "or" operators
// 5.Test whether an item is in a array
// 6.Test whether an item is not in a array
//Answer:
// 1.Tests for equality and inequality with strings
console.log("Equality test:", "Narjis Fatima" === "Narjis Fatima"); // sEquality
console.log("Inequality test:", "Narjis Fatima" === "Shireen Khalid");
// 2.Tests using the lower case function
console.log("lowercase test:", "NARJIS FATIMA".toLowerCase() === "narjis fatima");
// 3.Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Equality test:", 1000 === 1000);
console.log("Inequality test:", 10 !== 9);
console.log("greater than test", 10000 > 100);
console.log("less than", 10 < 100);
console.log("greater than & equals to test", 10 >= 10);
console.log("less than & equals to test", 5 <= 10);
// 4.Tests using "and" and "or" operators
console.log("And operator test", true && true);
console.log("Or operator test", true || false);
// 5.Test whether an item is in a array
const car = [1, 2, 3];
console.log("test number", car.includes(1));
// 6.Test whether an item is not in a array
const car1 = [1, 2, 3];
console.log("test number", !car.includes(6));
//THE END //
