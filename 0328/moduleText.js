const moduleA = require("./moduleA");

const text_odd = "홀수입니다";
const text_even = "짝수입니다";

console.log("1 : ",exports == moduleA.exports);

module.exports = {
    text_odd,
    text_even
}