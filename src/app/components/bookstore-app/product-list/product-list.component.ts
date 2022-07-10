import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any = [
    {id: "1", name: "Book 1", price: 24, quantity: 1, category: "Action", img: "book1.webp"},
    {id: "2", name: "Book 2", price: 50, quantity: 1, category: "Horror", img: "book2.webp"},
    {id: "3", name: "Book 3", price: 20, quantity: 1, category: "Drama", img: "book3.jpg"},
    {id: "4", name: "Book 4", price: 39, quantity: 1, category: "Business", img: "book4.jpg"},
    {id: "5", name: "Book 5", price: 19, quantity: 1, category: "Comedy", img: "book5.jpg"}
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.livros)
  }

}
