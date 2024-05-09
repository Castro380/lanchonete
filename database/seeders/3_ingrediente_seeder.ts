import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Ingrediente from '../../app/models/ingrediente.js'

export default class extends BaseSeeder {
  async run() {
    await Ingrediente.createMany([
      {nome: 'Pão com gergelim', descricao: 'Pão caseiro feito em casa'},
    ])
  }
}