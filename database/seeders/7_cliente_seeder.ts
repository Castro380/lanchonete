import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cliente from '#models/cliente'

export default class extends BaseSeeder {
  async run() {
    await Cliente.createMany([
     {nome: 'Castro',cpf: '111.222.333-85',telefone: '98525-6368', email: 'castro@gmail.com'},
     {nome: 'mateus',cpf: '777.888.222-28',telefone: '96853-6547', email: 'mateus@gmail.com'},
     {nome: 'jandaia',cpf: '444.777.111-74',telefone: '94748-6545', email: 'jandaia@gmail.com'},
     {nome: 'aline',cpf: '222.555.444-47',telefone: '96541-2541', email: 'aline@gmail.com'},
    
    ])
  }
}