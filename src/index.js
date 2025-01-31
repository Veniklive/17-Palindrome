/** Determines whether a string or word is a palindrome.
 * @param {String} str - String to check.
 * @returns {boolean} Palindrome check result.
 */

function definePolydrome(str) {
  let letters = str
    .replace(/[-–—,. !?:;"']/g, "")
    .toLowerCase()
    .split("");
  for (let i = 0; i < letters.length / 2; i++) {
    if (letters[i] !== letters[letters.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

let inputStr = "Ущипне — та шатен: пищу!";
console.log(definePolydrome(inputStr));
