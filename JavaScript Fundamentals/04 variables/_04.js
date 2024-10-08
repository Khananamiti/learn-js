
// #1 Работа с переменными
const callback1 = () => {
  let admin;
  let name;
  name = 'Джон';
  admin = name;
  alert(admin);
};


// #2 Придумайте правильные имена
const callback2 = () => {
  let ourPlanetName = 'Земля';
  let currentUserName = 'Джон';

  alert("ourPlanetName, currentUserName")
};

// #3 Какие буквы (заглавные или строчные) использовать для имён констант?
const callback3 = () => {
  alert("BIRTHDAY, age")
};


const buttonInfoList = [
  {
    "selector": "#myButton1",
    "callback": callback1
  },
  {
    "selector": "#myButton2",
    "callback": callback2
  },
  {
    "selector": "#myButton3",
    "callback": callback3
  },
];

for (const buttonInfo of buttonInfoList) {
  const button = document.querySelector(buttonInfo.selector);
  button.addEventListener("click", buttonInfo.callback);
}