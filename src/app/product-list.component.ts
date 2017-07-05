import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent{
    @Input() product: Product;
    @Output() selectedProduct: EventEmitter<Product>;
    constructor(){
        this.selectedProduct = new EventEmitter();
    }
    clickedProduct(product: Product): void{
        this.selectedProduct.emit(product);
    }
}