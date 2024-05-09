import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Tipo from '../../app/models/tipo.js'

export default class extends BaseSeeder {
  async run() {

    await Tipo.createMany([
      {id: 1, nome: 'Bebidas'},
      {id: 2, nome:'Hamburguer'},
      {id: 3, nome: 'Sobremesas'},
      {id: 4, nome: 'BebHot Dog'},
      {id: 5, nome: 'Porções'},
    ])

  }
}