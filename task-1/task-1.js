const Account = function(login, email) {
  this.login = login;
  this.email = email;
};
Account.prototype.getInfo = function() {
  console.log(`Логин:${this.login} и email:${this.email}`);
};
console.log(Account);

const poly = new Account('Poly', 'poly@mail.com');

poly.getInfo();
const mango = new Account('Mangozedog', 'mango@dog.woof');

mango.getInfo();
