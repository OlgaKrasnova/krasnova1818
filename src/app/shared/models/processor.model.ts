export class Processor { // класс для описания процессора
    public id: number;
    public name: string;   // название
    public vendorcode: string; // артикул
    public price: number; // цена
    public chipset: string; // чипсет
    public core: number; // количество ядер
    public frequency: number; // частота
    constructor (name: string, vendorcode: string, price: number, chipset: string, core: number, frequency: number, id?: number) {
        this.id = id;
        this.name = name;
        this.vendorcode = vendorcode;
        this.price = price;
        this.chipset = chipset;
        this.core = core;
        this.frequency = frequency;
    }
  }