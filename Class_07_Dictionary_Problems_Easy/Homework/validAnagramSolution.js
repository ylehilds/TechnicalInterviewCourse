/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise. Use a dictionary.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
 * typically using all the original letters exactly once.
 * 
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * Source: https://leetcode.com/problems/valid-anagram/
 */

let s = 'anagram'
let t = 'nagaram'

function isAnagram(word1, word2) {
  return dictionaryComparison(getDictionary(word1),getDictionary(word2))
}

function dictionaryComparison (dict1, dict2) {
  const keys1 = Object.keys(dict1)
  const keys2 = Object.keys(dict2)
  if (keys1.length !== keys2.length) return false // if both dictionaries do not have the same keys length then they are not potentially equal
  for (const [key, value] of Object.entries(dict1)) {
    // console.log(`${key}: ${value}`)
    if (!dict2.hasOwnProperty(key) || dict2[key] !== dict1[key]) return false // as soon as we find a difference between keys and values return false
  }
  return true
}

function getDictionary(word) {
  let anagramHelper = {}
  for (let character of word) {
    anagramHelper[character] ?  anagramHelper[character] +=1 :  anagramHelper[character] = 1
  }
  return anagramHelper
}

console.log(isAnagram(s, t))
s = 'rat'
t = 'car'
console.log(isAnagram(s, t))