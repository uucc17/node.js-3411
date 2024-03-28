const {text_even, text_odd} = require("./moduleText");

function checkStringOddOrEven(str){
    if (str.length % 2) {
        return text_odd;
    }
    return text_even;
}

console.log("3 : ", checkStringOddOrEven("안녕"));
console.log("4 : ", checkStringOddOrEven("안녕하세요"));

module.export = [checkStringOddOrEven, text_even, text_odd];