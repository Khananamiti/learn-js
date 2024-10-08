// #1 Работа с переменными
const callback1 = () => {
  let admin;
  let name;
  name = 'Джон';
  admin = name;
  alert(admin);
};
  
const button1 = document.querySelector("#myButton1");
button1.addEventListener("click", callback1);


// #2 Придумайте правильные имена
const callback2 = () => {
  
  let ourPlanetName = 'Земля';
  let currentUserName = 'Джон';

  alert("ourPlanetName, currentUserName")
};

const button2 = document.querySelector("#myButton2");
button2.addEventListener("click", callback2);

// #3 Какие буквы (заглавные или строчные) использовать для имён констант?
const callback3 = () => {
  alert("BIRTHDAY, age")
};

const button3 = document.querySelector("#myButton3");
button3.addEventListener("click", callback3);

