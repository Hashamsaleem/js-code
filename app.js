"use strict";
let challange = "30 Days of javascript";
console.log(challange);
console.log(challange.length);
console.log(challange.toLocaleLowerCase());
console.log(challange.toLocaleUpperCase());
console.log(challange.substring(0, 1));
console.log(challange.substring(10));
console.log(challange.includes("script"));
console.log(challange.split());
console.log(challange.split(" "));
let socialMedia = "Facebook Google Microsoft Apple IBM Oracle Amazon";
console.log(socialMedia.split(" "));
console.log(challange.replace("javascript", "python"));
console.log(challange.charAt(15));
console.log(challange.charCodeAt("j"));
console.log(challange.indexOf("a"));
console.log(challange.lastIndexOf("a"));

let sentance =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentance);
console.log(sentance.lastIndexOf("because"));
console.log(sentance.search("because"));
console.log(sentance.trim());
console.log(challange.trim());
console.log(challange.startsWith("30"));
console.log(challange.endsWith("javascript"));
console.log(challange.match(/a/g));

let first = "30 days of";
let second = "Javascript";
console.log(first + second);
console.log(challange.repeat(2));
console.log(
  "'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
console.log(parseInt(10) === 10);
console.log(parseFloat(9.8) === 10);
console.log(Math.ceil(parseFloat(9.8)) === 10);
let python = "python";
let jargon = "jargon";
console.log(python, jargon);
console.log(python.match("on"));
console.log(python.includes("o"));
console.log(jargon.match("on"));
console.log(jargon.includes("on"));
let check = "I hope this course is not full of jargon";
console.log(check.includes("jargon"));
console.log(check.match(/jargon/gi));

let random = Math.random() * 101;
console.log(Math.floor(random));
let random1 = Math.random() * 50 + 101 - 50;
console.log(Math.floor(random1));
let random3 = Math.random() * 256;
console.log(Math.floor(random3));

let word = "Javascript";
console.log(word.length);
let access = Math.floor(Math.random() * 10);
console.log(access);
console.log(word[access]);
console.log(" 1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27\n 4 1 4 16 64\n 5 1 5 25 125");
let del = sentance.split();

let love =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(love.match(/love/g));
console.log(sentance.match(/because/g));

let clean =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching.";
let c1 = clean.replaceAll("%", "");
let c2 = c1.replaceAll("@", "");
let c3 = c2.replaceAll("$", "");
let c4 = c3.replaceAll("&", "");
let c5 = c4.replaceAll(";", "");
let c6 = c5.replaceAll("#", "");
let c7 = c6.replaceAll("!", "");
console.log(c7);

let mone =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let v1 = parseInt(mone.match("5000") * 12);
let v2 = parseInt(mone.match("10000"));
let v3 = parseInt(mone.match("15000") * 12);
let total = v1 + v2 + v3;
console.log(`His per month income is 5000 so for 1 year it will be ${v1}`);
console.log(`His per annual bonus is ${v2}`);
console.log(
  `His per month income in online course is 15000 so for 1 year it will be ${v3}`
);
console.log(`So the total income for one year will be ${total}`);
