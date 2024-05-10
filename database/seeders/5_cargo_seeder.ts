import Cargo from '#models/cargo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    await Cargo.createMany([
      {id: 1, nome: 'Cozinheiro'},
      {id: 2, nome:'Garçom'},
      {id: 3, nome: 'Gerente'},
      {id: 4, nome: 'Atendente'},
    ])

  }
}