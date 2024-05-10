import ProdutoIngrediente from '#models/produto_ingrediente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    await ProdutoIngrediente.createMany([

      {produtoId:5,ingredienteId:1},
      {produtoId:5,ingredienteId:2},
      {produtoId:5,ingredienteId:3},
      {produtoId:6,ingredienteId:1},
      {produtoId:6,ingredienteId:2},
      {produtoId:6,ingredienteId:4},
      {produtoId:7,ingredienteId:1},
      {produtoId:7,ingredienteId:2},
      {produtoId:7,ingredienteId:3},
      {produtoId:7,ingredienteId:3},
      {produtoId:8,ingredienteId:1},
      {produtoId:8,ingredienteId:2},
      {produtoId:8,ingredienteId:3},
      {produtoId:8,ingredienteId:5},
      {produtoId:9,ingredienteId:1},
      {produtoId:9,ingredienteId:2},
      {produtoId:9,ingredienteId:6},
      {produtoId:10,ingredienteId:7},
      {produtoId:11,ingredienteId:8},
      {produtoId:12,ingredienteId:9},
      {produtoId:13,ingredienteId:10},
      {produtoId:14,ingredienteId:11},
      {produtoId:15,ingredienteId:12},
      {produtoId:16,ingredienteId:13},
      {produtoId:17,ingredienteId:14},
      {produtoId:18,ingredienteId:15},
      {produtoId:19,ingredienteId:16},
      {produtoId:20,ingredienteId:17},
      {produtoId:21,ingredienteId:18},
      {produtoId:22,ingredienteId:19},
      {produtoId:23,ingredienteId:20},
      {produtoId:24,ingredienteId:21},
      
    ])
  }
}