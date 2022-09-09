//Task 1
let fistName = "                        Hadi ";
let lastName = "Rastin                                   ";
let fullName = fistName.concat(lastName);
 



console.log(fullName);
console.log(fullName.toUpperCase());
console.log(fullName.replace("Hadi", "Alex"));
console.log(fullName.trim());
console.log(fullName.split(" "));
console.log(fullName.indexOf("Hadi"));



//Task 2
const stringArray = ['deakin', 'university', 'computer science', '2022']
console.log(stringArray.length)

let type = typeof stringArray;
console.log(type)

stringArray.push("semester 2");
console.log(stringArray)

stringArray.unshift("assessment-2");
console.log(stringArray)


stringArray.sort();
console.log(stringArray)


const numberArray = [1, 2, 5, 10, 0, -3, 100]


numberArray.sort(function(a, b){return b - a});
console.log(numberArray)


const NewnumberArray = numberArray.map(duplicateByTen);

function duplicateByTen(value, index, array) {
  return value * 10;
}

console.log(NewnumberArray);

//task 3
const dateVaribale = new Date(2022, 09, 24, 9, 45);

console.log(dateVaribale.toString())
console.log(dateVaribale.getFullYear())
console.log(dateVaribale.getDate())

dateVaribale.setFullYear(2010);
dateVaribale.setMonth(11);

console.log(dateVaribale)





