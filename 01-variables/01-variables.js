/*
Variables

Мы можем объявить переменные для хранения данных с помощью ключевых слов var, let или const.

let – это современный способ объявления.
    var – это устаревший способ объявления. Обычно мы вообще не используем его, но мы рассмотрим тонкие отличия от let в главе Устаревшее ключевое слово "var" на случай, если это всё-таки вам понадобится.
    const – похоже на let, но значение переменной не может изменяться.
    Переменные должны быть названы таким образом, чтобы мы могли легко понять, что у них внутри.них
*/
/*
01 Работа с переменными
важность: 2
    Объявите две переменные: admin и name.
    Запишите строку "Джон" в переменную name.
    Скопируйте значение из переменной name в admin.
    Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).
*/
let admin;
let name;
name = 'Джон';
admin = name;
alert(admin);
