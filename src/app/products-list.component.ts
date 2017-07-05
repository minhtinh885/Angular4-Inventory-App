import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
    selector: 'products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent{
    products: Array<Product>;
    constructor(){
        this.products = [];
        this.products.push(new Product("MYSHOES", "Black Running Shoes", 109.99, "", ["Men", "Shoes", "Running Shoes"]));
        this.products.push(new Product("NETOJACKET", "Blue Jacket", 238.99, "", ["Women", "Apparel", "Jackets & Vests"]));
        this.products.push(new Product("NICEHAT", "A Nice Black Hat", 29.99, "", ["Men", "Accessories", "Hats"]));
    }

    private selectedProduct: Product;
    isSelected(product: Product): boolean{
        
        if(this.selectedProduct != null && product.productSku == this.selectedProduct.productSku){
            console.log(product);
            return true;
        } 
        return false;
    }

    selectProduct(product: Product): void{
        this.selectedProduct = product;
    }
    
}