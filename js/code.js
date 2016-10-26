(function() {

var myString = document.querySelector('section').innerText;

function getWordFrequency(stringToSplit) {
  var frequency = {};


  stringToSplit

  .split(" ")

  .filter(function remove (eachWord) {
    return (eachWord.length > 1);
  })

  .forEach(function count (word){

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

})();
