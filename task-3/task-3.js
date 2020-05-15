class Storage {
  constructor(...arr) {
    this.$items = arr;
  }

  get items() {
    return this.$items;
  }

  addItem(product) {
    this.items.push(product);
  }

  removeItem(product) {
    if (this.items.includes(product)) {
      this.items.splice(this.items.indexOf(product), 1);
    }
  }
}

const storage = new Storage(
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
);
console.table(storage); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items);
