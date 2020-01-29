export class Card { // класс для описания видеокарты
    public id: number;
    public name: string;   // название
    public vendorcode: string; // артикул
    public price: number; // цена
    public capacity: string; // объем видеопамяти
    constructor (name: string, vendorcode: string, price: number, capacity: string, id?: number) {
        this.id = id;
        this.name = name;
        this.vendorcode = vendorcode;
        this.price = price;
        this.capacity = capacity;
    }
  }