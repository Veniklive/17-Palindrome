/** Determines whether a string or word is a palindrome.
 * @param {String} str - String to check.
 * @returns {boolean} Palindrome check result.
 */

function definePolydrome(str) {
  str = str.replace(/[-–—,. !?:;"']/g, "").toLowerCase();
  return str === str.split("").reverse().join("") ? true : false;
}

let inputStr = "Ущипне — та шатен: пищу!";
console.log(definePolydrome(inputStr));
