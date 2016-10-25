
var myString = document.querySelector('section').innerText;

function getWordFrequency(stringToSplit) {
  var arrayOfString = stringToSplit.split(" ");
  var frequency = {};

  arrayOfString.forEach(function count (word) {
    if (frequency[word] === undefined) {
        frequency[word] = 1;
    } else {
      frequency[word]++;
    }
});

    return frequency;

};


var end = getWordFrequency(myString);

console.log(end);











// var myString = 'From fairest creatures we desire increase, That thereby beauty\'s rose might never die, But as the riper should by time decease, His tender heir might bear his memory: But thou contracted to thine own bright eyes, Feed\'st thy light\'s flame with self'-'substantial fuel, Making a famine where abundance lies, Thy self thy foe, to thy sweet self too cruel: Thou that art now the world\'s fresh ornament, And only herald to the gaudy spring, Within thine own bud buriest thy content, And tender churl mak\'st waste in niggarding: Pity the world, or else this glutton be, To eat the world\'s due, by the grave and thee.';
//
//
//
// function getWordFrequency(stringToSplit) {
//   var string = stringToSplit.split(" ");
//   console.log(string);
//
//
//     // getWordFrequency.forEach(function uniqueWord(each) {
//     // console.log(each);
//   //
//   // })
//   // return arrayString;
//   // return {};
// }
//
// // var qrorfgh = hold onto getWordFrequency(myString) below
// getWordFrequency(myString);
// //
// // console.log(qrorfgh);
//
