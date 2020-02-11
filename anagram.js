const allAnagrams = function(string) {
  let strOutput = {};

  (function anagram(ana, str) {
    if (!str) {
      strOutput[ana] = 1;
    }
    for (let i = 0; i < str.length; i++) {
      anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
      console.log(ana);
    }
  })("", string);
  console.log(strOutput);
  return Object.keys(strOutput);
};

let anagrams = allAnagrams("east");
console.log(anagrams);
