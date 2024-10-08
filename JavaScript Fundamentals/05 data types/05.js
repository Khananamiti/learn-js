// #1
const callback1 = () => {
  let name = "Ilya";

  alert(`hello ${1}`); // ? "hello 1"
  alert(`hello ${"name"}`); // ? "hello name"

  alert(`hello ${name}`); // ? "hello Ilya"
};

const button1 = document.querySelector("#myButton1");
button1.addEventListener("click", callback1);
