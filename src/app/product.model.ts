export class Product{
    constructor(public productSku: string, public title: string, public price: number, public imageUrl: string, public departments: Array<string>){
        this.productSku = productSku || "###";
        this.title = title || "Khong co title";
        this.price = price || 0;
        this.imageUrl = imageUrl || "Chua ro";
        this.departments = departments;
    }
}