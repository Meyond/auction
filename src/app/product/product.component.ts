import { Component, OnInit } from '@angular/core';

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>,
  ) {

  }
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Array<Product>;
  imgUrl = 'http://via.placeholder.com/320x150';

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 3.5, '商品说明商品说明商品说明商品说明', ['电子产品', '硬件外设']),
      new Product(2, '第二个商品', 2.99, 4.5, '商品说明商品说明商品说明商品说明', ['电子产品', '硬件外设']),
      new Product(3, '第三个商品', 3.99, 1.5, '商品说明商品说明商品说明商品说明', ['电子产品', '硬件外设']),
      new Product(4, '第四个商品', 4.99, 2.5, '商品说明商品说明商品说明商品说明', ['电子产品', '硬件外设']),
      new Product(5, '第五个商品', 5.99, 4.5, '商品说明商品说明商品说明商品说明', ['电子产品', '硬件外设']),
      new Product(6, '第六个商品', 6.99, 3.5, '商品说明商品说明商品说明商品说明', ['电子产品', '硬件外设']),
    ];
  }
}
