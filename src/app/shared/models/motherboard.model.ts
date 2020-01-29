export class Motherboard { // класс для описания материнской платы
    public id: number;
    public name: string;   // название
    public vendorcode: string; // артикул
    public price: number; // цена
    public chipset: string; // чипсет
    public formfactor: string; // формфактор
    constructor (name: string, vendorcode: string, price: number, chipset: string, formfactor: string, id?: number) {
        this.id = id;
        this.name = name;
        this.vendorcode = vendorcode;
        this.price = price;
        this.chipset = chipset;
        this.formfactor = formfactor;
    }
  }