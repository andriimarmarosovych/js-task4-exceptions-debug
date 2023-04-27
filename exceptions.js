// 1. Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) – порядкові номери елементів масиву, 
// які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.Функція повинна генерувати винятки, 
// якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву. 
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.



function sumSliceArray(arr, first, second) {
    if (typeof first !== 'number' || typeof second !== 'number') {
      throw new Error('Error: index should be Number');
    }
    if (first >= arr.length || second >= arr.length) {
      throw new Error('Error: index is longer than array!');
    }
  
    return arr[first] + arr[second];
  }

//  2. Створіть функцію checkAge(), яка запитує у користувача його ім'я,
//    вік та статус (адмін, модератор, користувач) та генерує модальне вікно з помилкою,
//    якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).
//    користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error). 
//    У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення. 
//    У всіх інших випадках користувач отримає доступ до перегляду фільму. 
//    У блоці catch передбачена можливість виведення назви та опису помилки.

function checkAge() {
    try { 
        const yourName = prompt('Enter your name:');
        if (!yourName) {
            throw new Error('The field is empty! Please enter your name!');
        }

        const age = prompt('Enter your age:');
        if (!age) {
            throw new Error('The field is empty! Please enter your age!');
        }
        if (isNaN(age)) {
            throw new TypeError('Age must be Number!');
        }
        const ageNum = Number(age);

        const status = prompt('Please enter your status (admin/user/moderator):');
        if (!status) {
            throw new Error('The field is empty, please enter your status on English!');
        }
        if (status !== 'admin' && status !== 'user' && status !== 'moderator') {
            throw new EvalError('Invalid status!');
        }

        if (ageNum < 18 || ageNum > 70) {
            throw new RangeError('Your age is too low or too high');
        }

        alert('You have access to film!');
    } catch(error) {
        alert(`Error is: ${error.name} - ${error.message}`);
    }
}

// 3. Реалізуйте функцію calcRectangleArea(width, height), 
// яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. 
// Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
        throw new Error('You should use Numbers');
    }

    const area = width * height;

    return area;
}

// 4. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця. 
// У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// Приклад роботи програми:
// console.log(showMonthName(5));  May
// console.log(showMonthName(14)); MonthException Incorrect month number

// 5. Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. 
// Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність,
//  в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.
// Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]

function showUser(id) {
    if (id < 0) {
        throw new Error('ID can not be negative: ' + id);
    }
    return { id: id };
}

function showUsers(ids) {
    
}