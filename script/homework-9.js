import { comments } from "./comments.js";

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];

console.log(numbers);

const slicedNumbers = numbers.filter (number => number >= 5)
console.log(slicedNumbers);

const jungleHeroes = [
  "Axe",
  "Legion Commander",
  "Nature's Prophet",
  "Lifestealer",
  "Pudge",
];

console.log(jungleHeroes.includes("Crystal Maiden"));

jungleHeroes.reverse();
console.log(jungleHeroes);

const commentsWithComEmails = comments.filter(comment => {
  return comment.email.includes(".com");
});

console.log(commentsWithComEmails);

const updatedComments = comments.map(comment => {
return {
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}
});

console.log(updatedComments);

const commentsIdAndName = comments.map(comment => {
  return {
    id: comment.id,
    name: comment.name
  };
});

console.log(commentsIdAndName);

const longCommentsStatus = comments.map(comment => {
  return {
    ...comment,
    isInvalid: comment.body.length > 180
  };
});


console.log(longCommentsStatus);

const mailsArray = comments.reduce((mails, comment) => {
  mails.push(comment.email);
  return mails;
}, []);

console.log(mailsArray);

const mailsArray2 = comments.map(comment => comment.email);

console.log(mailsArray2);

console.log(mailsArray2.join());