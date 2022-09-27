Задание 1
let a = prompt ("input");
a = +a;
alert (typeof a);

if (a% 2 ===0) {
  alert ("четное");
  
}
else if (a%1 ===0) {
  alert ("нечетное");
  
}
else {
  alert("Упс, кажется вы ошиблись")
}

if (a > 0)
 alert(true)

else if (a < 0)
  alert(false )

else
  alert(false)

Задание 2
x = +x; 
alert(typeof x);

x = "123";
alert (typeof x);

if (x > 0) {
 alert(true);
}
else if (x < 0) {
  alert(false);
}

else {
   alert("Тип Х не определен");
}

Задание 3
s = prompt("Введите данные");
function reverse(s){
    return s.split("").reverse().join("");
}
console.log(reverse(s));



Задание 4
function  getRandomRange(min, max) {
    return Math.floor(Math.random() * (max-min));
  }
  
  console.log(getRandomRange(0, 100));

Задание 5
let cars = ["ЗАЗ", "ИЖ", "АЗЛК", "ВАЗ", "ГАЗ"];
console.log(cars.length);["ЗАЗ", "ИЖ", "АЗЛК", "ВАЗ", "ГАЗ"].forEach(alert);

Задание 6
 var arr = [5, 5, 5, 5];

 function foo(a) {
   for (var b = 0; b < a.length; b++)
     if (a[b] !== a[0]) return !1;
   return !0
 };

console.log([foo(arr)]);
//res/ true

//

var arr = [5, 5, 4, 5];

 function foo(a) {
for (var b = 0; b < a.length; b++)
if (a[b] !== a[0]) return !1;
return !0
 };

console.log([foo(arr)]);
//res/ false

Задание 7
let arr = [4, 3, 2, null, 1, 5, 99, 6,undefined, ];
let zerocount = 0;
let numbercount = 0;
let evencount = 0;
let oddcount = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
        numbercount += 1;
        if (arr[i] === 0) {
            zerocount += 1;
        } else if (arr[i] % 2 === 0) {
            evencount += 1;
        } else {
            oddcount += 1;
        }
    }
}
console.log(`В массиве: ${numbercount} цифр, ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных!`);
