import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Produto from '../../app/models/produto.js'

export default class extends BaseSeeder {
  async run() {
    
    await Produto.createMany([
      {id:1, nome: "Coca-Cola lata", preco: 6.5, tamanho: "330ml", tipoId: 1},
      {nome: "Coca-Cola 2L", preco: 10, tamanho: "2L", tipoId: 1},
      {nome: "Coca-Cola 600", preco: 8, tamanho: "600ml", tipoId: 1 },
      {nome: "Coca-Cola ks", preco: 6.5, tamanho: "290ml", tipoId: 1},


      {nome: "Hambúrguer Clássico", preco: 15, tamanho: "M", tipoId: 2},
      {nome: "Hambúrguer Vegetariano", preco: 12, tamanho: "P", tipoId: 2},
      {nome: "Hambúrguer Duplo", preco: 20, tamanho: "G", tipoId: 2},
      {nome: "Hambúrguer Picante", preco: 16, tamanho: "M", tipoId: 2},
      {nome: "Hambúrguer de Frango", preco: 14, tamanho: "GG", tipoId: 2},


      {nome: "Sorvete de Chocolate", preco: 10, tamanho: "M", tipoId: 3},
      {nome: "Torta de Maçã", preco: 8, tamanho: "G", tipoId: 3},
      {nome: "Mousse de Morango", preco: 6, tamanho: "P", tipoId: 3},
      {nome: "Brownie com Sorvete", preco: 12, tamanho: "GG", tipoId: 3},
      {nome: "Cheesecake de Framboesa", preco: 14, tamanho: "M", tipoId: 3},


      {nome: "Hot Dog Clássico", preco: 10, tamanho: "M", tipoId: 4},
      {nome: "Hot Dog Vegano", preco: 8, tamanho: "P", tipoId: 4},
      {nome: "Hot Dog Especial", preco: 12, tamanho: "G", tipoId: 4},
      {nome: "Hot Dog Picante", preco: 11, tamanho: "M", tipoId: 4},
      {nome: "Hot Dog Duplo", preco: 14, tamanho: "GG", tipoId: 4},

      
      {nome: "Porção de Batata Frita", preco: 15, tamanho: "M", tipoId: 5},
      {nome: "Porção de Onion Rings", preco: 12, tamanho: "P", tipoId: 5},
      {nome: "Porção de Frango à Passarinho", preco: 18, tamanho: "G", tipoId: 5},
      {nome: "Porção de Mandioca Frita", preco: 14, tamanho: "M", tipoId: 5},
      {nome: "Porção de Polenta Frita", preco: 16, tamanho: "G", tipoId: 5}

    ])

  }
}