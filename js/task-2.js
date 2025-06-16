function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  } else {
    return newArray;
  }
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

//Answers
//1.tell me about yourself?
//I'm a junior fullstack developer. I love studying and constantly improving myself. What I love about development is that I can always learn something new. It gives me freedom — I can work from anywhere, and that’s important to me. I never thought this profession was for me, until I tried it — and fell in love with coding.

//2.What is Semantic HTML?
//Semantic HTML means using HTML tags that describe the meaning of the content, like <header>, <main>, <footer>, <article>, <section>. They help with accessibility and SEO.

//3. How to make element flexible using Flexbox?
//We can set the parent to display: flex and the child to flex-grow to make it flexible.

/* .parent {
  display: flex;
}
.child {
  flex: 1;
}
 */
