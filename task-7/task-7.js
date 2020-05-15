const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length < 4 || login.length > 16) {
    return false;
  }
  return true;
};

const isLoginUnique = function(allLogins, login) {
  // eslint-disable-next-line

  if (allLogins.includes(login)) {
    return false;
  }

  return true;
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    allLogins.push(login);

    alert('Логин успешно добавлен!');
  } else if (isLoginValid(login) === false) {
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
  } else {
    alert('Такой логин уже используется!');
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast'));
console.log(addLogin(logins, 'Ajax')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
