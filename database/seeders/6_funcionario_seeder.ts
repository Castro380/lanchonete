import Funcionario from '#models/funcionario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Funcionario.createMany([
      {nome:'Lucas', cpf: '222.222.222-33', endereco: 'QNN 27', sexo: 'M', telefone: '97465-6565',cargoId: 1},
      {nome:'João', cpf: '333.333.333-75', endereco: 'QNN 28', sexo: 'M', telefone: '96352-8478',cargoId: 2},
      {nome:'Mateus', cpf: '111.222.333-45', endereco: 'QNN 29', sexo: 'M', telefone: '92584-5621',cargoId: 3},
      {nome:'Carlos', cpf: '444.444.444-87', endereco: 'QNN 30', sexo: 'M', telefone: '98745-6523',cargoId: 4},
    ])
  }
}