'use strict';

const repeatedWord = (input)=> {

  const punctuation = /[!,.?]/g;
  const regex = removePunctuation(input, punctuation);
  const words = regex.split(' ');

  let wordSet = new Set();
  for (let i=0; i<words.length; i++){
    if (wordSet.has(words[i].toLowerCase())){
      return words[i].toLowerCase();
    }else{
      wordSet.add(words[i].toLowerCase());
    }
  }
  return null;
};
function removePunctuation(string, punctuation){
  return string.replace(punctuation, '');
}

module.exports = repeatedWord;
