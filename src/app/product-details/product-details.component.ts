import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'robot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() product!: IProduct; //parent to child
  @Output() buy = new EventEmitter(); //child to parent

  getDiscountedClasses(product: IProduct) {
    return product.discount > 0 ? ['strikethrough'] : [];
  }

  getImageUrl(product: IProduct) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

  buyButtonClicked(product: IProduct) {
    this.buy.emit();
  }
}
