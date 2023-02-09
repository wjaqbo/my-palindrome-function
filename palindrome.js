function checkIfWordIsPalindrome(word) {
  const isEmpty = () => word === undefined || word === null || word === '';
  const isNotString = () => typeof word !== 'string';
  const isNotPalindrome = () => {
    const orginalWord = word.toLowerCase();
    const reversedWord = orginalWord.split('').reverse().join('');
    return orginalWord !== reversedWord || word.length === 1;
  };

  if (isEmpty()) return 'Word is required';
  if (isNotString()) return 'Word has to be a string';
  if (isNotPalindrome()) return 'Word is not Palindrome';
  return 'Word is Palindrome!';
}
