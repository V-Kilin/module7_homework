// Задание 1.

// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

 let user = {
      name: 'Ivan',
      surname: 'Petrov',
      age: 35,
   }

function newObj(obj) {
   console.log(obj);
}

newObj(user);


// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function newUser(text, obj) {
   if (text in obj) {
      return true;
   } else {
      return false;
   }
}

console.log(newUser('age', user));


// Задание 3.

// Написать функцию, которая создает пустой объект, но без прототипа.

function newFunc() {
   const Obj = Object.create(null)
   console.log(Obj);
}
newFunc()


// Задание 4.

// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент).

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricalAppliance(name, power) {
   this.name = name;
   this.power = power;
   this.isPlugged = false;
}

// Включено в розетку
ElectricalAppliance.prototype.plugin = function () {
   console.log(this.name + ' is plugged');
   this.isPlugged = true;
}

// Выключено из розетки
ElectricalAppliance.prototype.unplug = function () {
   console.log(this.name + ' is unplugged!');
   this.isPlugged = false;
}

// Прибор 1
function Lamp(name, brand, power, buildType) {
   this.name = name;
   this.brand = brand;
   this.power = power;
   this.buildType = buildType;
   this.isPlugged = true;
}

Lamp.prototype = new ElectricalAppliance();

// Прибор 2
function Computer(name, brand, power, type,functionality) {
   this.name = name;
   this.brand = brand;
   this.power = power;
   this.type = type;
   this.functionality = functionality;
   this.isPlugged = false;
}

Computer.prototype = new ElectricalAppliance();

// Лампа
const tableLamp = new Lamp('Table lamp', 'Xiaomi', 5, 'LED');

// Компьютер
const homePC = new Computer('Table PC', 'Intel', 120, 'stationary', 'for work');

// Отключить лампу из розетки
tableLamp.unplug();

// Включить homePC в розетку
homePC.plugin();

console.log(homePC);
console.log(tableLamp);


// Задание 5.

// Переписать консольное приложение из предыдущего юнита на классы.

// Общие требования:

// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;


class ElectricalAppliance {
   constructor(name, power, isPlugged) {
      this.name = name;
      this.power = power;
      this.isPlugged = isPlugged;
   }
   // Включено в розетку
ElectricalAppliancePlugin() {
   console.log(this.name + ' is plugged');
   this.isPlugged = true;
   }
   // Выключено из розетки
ElectricalApplianceUnplug () {
   console.log(this.name + ' is unplugged!');
   this.isPlugged = false;
}
}

// Прибор 1
class Lamp extends ElectricalAppliance {
   constructor(name, brand,power, buildType) {
     super(name, power);
   this.brand = brand;
   this.buildType = buildType;
   }
}

let tableLamp = new Lamp('Table lamp', 'Xiaomi', 5, 'LED');
// Включить лампу в розетку
tableLamp.ElectricalAppliancePlugin();
// Отключить лампу из розетки
tableLamp.ElectricalApplianceUnplug();
console.log(tableLamp);

// Прибор 2
class Computer extends ElectricalAppliance {
   constructor(name, brand, power, type, functionality) {
       super(name, power);
   this.brand = brand;
   this.type = type;
   this.functionality = functionality;
   this.isPlugged = false;
   }
}  

// // Компьютер
let homePC = new Computer('Table PC', 'Intel', 120, 'stationary', 'for work');
// Включить homePC в розетку
homePC.ElectricalAppliancePlugin();
// Отключить homePC из розетки
homePC.ElectricalApplianceUnplug();
console.log(homePC);





