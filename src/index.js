/** Determines whether a string or word is a palindrome.
 * @param {String} str - String to check.
 * @returns {boolean} Palindrome check result.
 */

function definePolydrome(str) {
  let arr = str
    .replace(/[-–—,. !?:;"']/g, "")
    .toLowerCase()
    .split("");
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

let inputStr = "Ущипне — та шатен: пищу!";
console.log(definePolydrome(inputStr));
