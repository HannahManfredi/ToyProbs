//input: string, name
//output: boolean, true is input is palindrome, otherwise false

const isPalindrome = (word) => {
  if (typeof word !== "string") {
    return false;
  }
  const lowerCasedInput = word.toLowerCase();

  let start = 0;
  let end = lowerCasedInput.length - 1;

  while (start < end) {
    console.log("lowerCasedInput[start]: ", lowerCasedInput[start]);
    console.log("lowerCasedInput[end]: ", lowerCasedInput[end]);
    if (lowerCasedInput[start] !== lowerCasedInput[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(isPalindrome("Hannah"));
console.log(isPalindrome("hannah"));
console.log(isPalindrome("foot"));
console.log(isPalindrome("f"));
console.log(isPalindrome("ft"));
console.log(isPalindrome(33));
