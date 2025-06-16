//1
function getGrade(score) {
  if (score >= 90) return "Perfect";
  if (score >= 70 && score <= 89) return "Great";
  if (score >= 50 && score <= 69) return "Good";
  if (score < 50) return "Not good enough";
}

console.log(getGrade(93));
//2
function canAccess(age) {
  if (age >= 18) {
    return "Access allowed";
  } else {
    return "Access denied";
  }
}

console.log(canAccess(19));

//3
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3]));

//4
function maxInArray(arr) {
  const max = Math.max(...arr);
  return max;
}

console.log(maxInArray([12, 9, 6, 3]));

//5
function countEven(arr) {
  const evenNumbers = arr.filter((arr) => arr % 2 === 0);
  return evenNumbers.length;
}

console.log(countEven([2, 6, 9]));

//7
function countDown(n) {
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
  return n;
}

console.log(countDown(5));
//8
function sumTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) sum = sum + i;

  return sum;
}

console.log(sumTo(4));

function slugify(title) {
  const slug = title.toLowerCase().split(" ").join("-");
  return slug;
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
