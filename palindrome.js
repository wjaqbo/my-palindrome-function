function checkIfWordIsPalindrome(word) {
  const isEmpty = () => word === undefined || word === null || word === '';

  const isNotString = () => typeof word !== 'string';

  const isNotPalindrome = () => {
    const orginalWord = word.toLowerCase();
    const reversedWord = orginalWord.split('').reverse().join('');
    return orginalWord !== reversedWord || word.length === 1;
  };

  return isEmpty()
    ? 'Word is required'
    : isNotString()
    ? 'Word has to be a string'
    : isNotPalindrome()
    ? 'Word is not Palindrome'
    : 'Word is Palindrome!';
}
