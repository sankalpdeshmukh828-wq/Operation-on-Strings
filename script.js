//...capital...//

function tocapitalise() {
  paragraph = document.getElementById("floatingTextarea2").value

  console.log(paragraph)

  paraInUpperCase = paragraph.toUpperCase()

  console.log(paraInUpperCase)

  document.getElementById("result").innerHTML = paraInUpperCase
}

//...count vowels...//

function countVowels() {

  paragraph = document.getElementById("floatingTextarea2").value

  count = 0;
  for (i = 0; i < paragraph.length; i++) {
    if (
      paragraph[i] == "a" ||
      paragraph[i] == "e" ||
      paragraph[i] == "i" ||
      paragraph[i] == "o" ||
      paragraph[i] == "u" ||
      paragraph[i] == "A" ||
      paragraph[i] == "E" ||
      paragraph[i] == "I" ||
      paragraph[i] == "O" ||
      paragraph[i] == "U"
    ) {
      count++;
    }
  }

  document.getElementById("result").innerHTML = "Count of vowels : " + count;
}

//Small case//

function tosmall() {
  paragraph = document.getElementById("floatingTextarea2").value

  console.log(paragraph)

  paraInLowerCase = paragraph.toLowerCase()

  console.log(paraInLowerCase)

  document.getElementById("result").innerHTML = paraInLowerCase
}

// Count spaces

function countSpaces() {
  let count = 0;
  paragraph = document.getElementById("floatingTextarea2").value

  for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i] === " ") {
      count++;
    } else {

    }
  }
  document.getElementById("result").innerHTML = "Count of Spaces : " + count;
}

// spaces replace with hyphens//

function replacewithhyphens() {
  paragraph = document.getElementById("floatingTextarea2").value

  console.log(paragraph)
  Text = paragraph.replaceAll(" ", "-");
  console.log(Text)

  document.getElementById("result").innerHTML = Text
}

// count the words//

function countWords() {
  paragraph = document.getElementById("floatingTextarea2").value
  console.log(paragraph)
  let words = paragraph.trim().split(/\s+/);
  const count = paragraph.trim() === "" ? 0 : words.length;

  document.getElementById("result").innerHTML =
    "Word Count: " + count;
}


// convert to title case//

function convertTitleCase() {


  let paragraph = document.getElementById("floatingTextarea2").value;
  let words = paragraph.toLowerCase().split(" ");
  let titleCase = "";

  for (let i = 0; i < words.length; i++) {
    titleCase +=
      words[i].charAt(0).toUpperCase() +
      words[i].slice(1) + " ";
  }

  document.getElementById("result").innerHTML = titleCase.trim();
}




// Extract first word//
function extractFirstWord() {
 let paragraph = document.getElementById("floatingTextarea2").value.trim();

  if (paragraph === "") {
    document.getElementById("result").innerHTML = "Please enter some text";
    return;
  }

  // Split by spaces OR new lines
  let firstWord = paragraph.split(/\s+/)[0];

  document.getElementById("result").innerHTML = "First word: " + firstWord;
}


// Consonents//
function countConsonests() {
  paragraph = document.getElementById("floatingTextarea2").value
  let count = 0;

  let str2 = paragraph.replaceAll(" ", "")
  for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i] === "a" || paragraph[i] === "e" || paragraph[i] === "i" || paragraph[i] === "o" || paragraph[i] === "u" || paragraph[i] === "A" || paragraph[i] === "E" || paragraph[i] === "I" || paragraph[i] === "O" || paragraph[i] === "U") {
      count++
    }

  }
  let countCon = paragraph.length - count
  document.getElementById("result").innerHTML = 'total Count of consonests: ' + countCon
}

// count new Lines//


function countNewLines() {

  let paragraph = document.getElementById("floatingTextarea2").value;

  if (paragraph.trim() === "") {
    document.getElementById("result").innerHTML = "New Lines: 0";
    return;
  }

  let count = paragraph.split("\n").length - 1;

  document.getElementById("result").innerHTML = "New Lines: " + count;
}

// Reverse//

function reverseCharacters() {
  paragraph = document.getElementById("floatingTextarea2").value
  revparagraph = ''
  for (i = paragraph.length - 1; i >= 0; i--) {
    {
      revparagraph += paragraph[i];
    }
  }

  document.getElementById("result").innerHTML = revparagraph

}

//palindrome or not//

function checkPalindrome() {
  let paragraph = document.getElementById("floatingTextarea2").value;
  let revparagraph = "";

  for (let i = paragraph.length - 1; i >= 0; i--) {
    revparagraph += paragraph[i];
  }

  if (paragraph === revparagraph) {
    document.getElementById("result").innerHTML = "Palindrome"
  } else {
    document.getElementById("result").innerHTML = "Not Palindrome"
  }
}


// sort the words//
function sortWords() {
  let paragraph = document.getElementById("floatingTextarea2").value.trim();

  if (paragraph === "") {
    document.getElementById("result").innerHTML = "Please enter some text";
    return;
  }

  let sortedWords = paragraph
    .split(/\s+/)  
    .sort()         
    .join(" ");   

  document.getElementById("result").innerHTML = "Sorted words: " + sortedWords;
}















