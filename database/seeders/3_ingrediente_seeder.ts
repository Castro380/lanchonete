import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Ingrediente from '../../app/models/ingrediente.js'

export default class extends BaseSeeder {
  async run() {
    await Ingrediente.createMany([
      {nome: 'Pão com gergelim', descricao: 'Pão caseiro feito em casa'},
      {nome: 'Salada', descricao: 'Alface, tomate, cebola'},
      {nome: 'Carne', descricao: 'Carne de Picanha'},
      {nome: 'Hamburguer', descricao: 'Carne Vegana'},
      {nome: 'Pimenta', descricao: 'Carne de Picanha com Pimenta-malagueta'},
      {nome: 'Frango', descricao: 'Peito de Frango'},


      {nome: 'chocolate hidrogenado', descricao: 'Sorvete'},
      {nome: 'Maçã', descricao: 'Torta'},
      {nome: 'Maracujá', descricao: 'Mousse'},
      {nome: 'Bolo', descricao: 'brownie'},
      {nome: 'Biscoito', descricao: 'Cheesecake'},
      

      {nome: 'Batata Frita', descricao: 'Batata'},
      {nome: 'Cebola Frita', descricao: 'Cebola'},
      {nome: 'Frango empanado', descricao: 'Frango'},
      {nome: 'Mandioca Frita', descricao: 'Mandioca'},
      {nome: 'Fubá', descricao: 'Polenta'},

    ])
  }
}