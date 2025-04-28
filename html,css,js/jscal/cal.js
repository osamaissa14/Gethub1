function isTweetValid(tweet) {
  return tweet.length <= 280;
}

let tweet = "This is a short tweet.";
console.log(isTweetValid(tweet));

function isValidUsername(username) {
  return username.charAt(0) === username.charAt(0).toUpperCase();
}

let username = "OsamaIssa";
console.log(isValidUsername(username));

function formatTitle(title) {
  title = title.toLowerCase();
  return title.charAt(0).toUpperCase() + title.slice(1);
}

let title = "hello world";
console.log(formatTitle(title));

function cleanEmail(email) {
  return email.trim();
}

let email = "   user@example.com   ";
console.log(cleanEmail(email));

function getArticlePreview(article, length = 100) {
  return article.slice(0, length) + "...";
}

let article =
  "JavaScript provides a variety of string methods that allow developers to manipulate and format text easily.";
console.log(getArticlePreview(article, 50));

function maskPhoneNumber(phone) {
  return "*".repeat(phone.length - 4) + phone.slice(-4);
}

let phoneNumber = "1234567890";
console.log(maskPhoneNumber(phoneNumber));

function correctSpelling(text) {
  text = text.replace("teh", "the");
  text = text.replace("recieve", "receive");
  return text;
}

let misspelledText = "I always mix up teh and recieve.";
console.log(correctSpelling(misspelledText));

function censorBadWords(text) {
  let badWord = "badword";
  let censoredWord = "****";
  while (text.includes(badWord)) {
    text = text.replace(badWord, censoredWord);
  }
  return text;
}

let badWordsText = "This is a badword example.";
console.log(censorBadWords(badWordsText));

function commentToWords(comment) {
  return comment.split(" ");
}

let comment = "JavaScript is an amazing programming language!";
console.log(commentToWords(comment));

function containsRestrictedWords(comment, restrictedWords) {
  return restrictedWords.some((word) => comment.includes(word));
}

let restrictedWords = ["spam", "offensive"];
let userComment = "This comment contains spam content.";
console.log(containsRestrictedWords(userComment, restrictedWords));

function isImageFile(filename) {
  return (
    filename.endsWith(".jpg") ||
    filename.endsWith(".png") ||
    filename.endsWith(".gif")
  );
}

let filename = "profile_picture.jpg";
console.log(isImageFile(filename));

function createDivider(length = 50) {
  return "-".repeat(length);
}

console.log(createDivider(30));

function mergeTitles(part1, part2) {
  return part1.concat(" ", part2);
}

let part1 = "Mastering";
let part2 = "JavaScript Strings";
console.log(mergeTitles(part1, part2));

function findKeywordPositions(text, keyword) {
  return {
    first: text.indexOf(keyword),
    last: text.lastIndexOf(keyword),
  };
}

let paragraph =
  "JavaScript is fun. JavaScript is powerful. Learning JavaScript is great!";
let keyword = "JavaScript";
console.log(findKeywordPositions(paragraph, keyword));
