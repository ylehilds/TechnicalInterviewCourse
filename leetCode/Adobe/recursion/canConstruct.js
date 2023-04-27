/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// var canConstruct = function(ransomNote, magazine) {
//     for (let letter of ransomNote) {
//         if (magazine.includes(letter)) {
//             let index = magazine.indexOf(letter)
//             let str = magazine.split('')
//             str.splice(index, 1)
//             str = str.join('')
//             magazine = str
//         }
//         else return false
//     }
//     return true
// };

// var canConstruct = function(ransomNote, magazine) {
//     for (let letter of ransomNote) {
//         let index = magazine.indexOf(letter)
//         if (index !== -1) {
//             let str = magazine.split('')
//             str.splice(index, 1)
//             str = str.join('')
//             magazine = str
//         }
//         else return false
//     }
//     return true
// };

var canConstruct = function(ransomNote, magazine) {
  let ransomNoteDict = {}
  let magazineDict = {}
  for (let letter of ransomNote) {
    ransomNoteDict[letter] = ransomNoteDict[letter] ? ransomNoteDict[letter]+=1 : 1
  }
  console.log(`ransomNoteDict: ${JSON.stringify(ransomNoteDict)}`)
  for (let letter of magazine) {
    magazineDict[letter] = magazineDict[letter] ?  magazineDict[letter]+=1 : 1
  }
  console.log(`magazineDict: ${JSON.stringify(magazineDict)}`)
  return dictionaryComparison(ransomNoteDict, magazineDict)
};

function dictionaryComparison (dict1, dict2) {
  const keys1 = Object.keys(dict1)
  const keys2 = Object.keys(dict2)
  for (const [key, value] of Object.entries(dict1)) {
    // console.log(`${key}: ${value}`)
    if (!dict2.hasOwnProperty(key) || dict1[key] > dict2[key]) return false // as soon as we find a difference between keys and values return false
  }
  return true
}

console.log(canConstruct('aa', 'ab'))