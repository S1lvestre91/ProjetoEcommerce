import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  bones = [
    {
      img: 'assets/newyork.webp',
      bone: 'New Yourk',
      descricao: 'Tecido',
      preco: ' 25,99'
    },
    {
      img: 'assets/flamengo.png',
      bone: 'Flamengo',
      descricao: 'Mesh',
      preco: " 25,99"
    },
    {
      img: 'assets/new balance.png',
      bone: 'New Balance',
      descricao: 'Tecido',
      preco: ' 15,99'
    },
    {
      img: 'assets/bnadidas.jpg',
      bone: 'Adidas',
      descricao: 'Tecido',
      preco: "29,99"
    },
    {
      img: 'assets/nike.webp',
      bone: 'Nike',
      descricao: 'Tecido',
      preco: "35,99"
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
