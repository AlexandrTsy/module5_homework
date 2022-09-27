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
