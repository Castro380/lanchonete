import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Ingrediente from '../../app/models/ingrediente.js'

export default class extends BaseSeeder {
  async run() {
    await Ingrediente.createMany([
      {nome: 'Pão com gergelim', descricao: 'Pão caseiro feito em casa'},
      {nome: 'Salada', descricao: 'Alface, tomate, cebola'},
      {nome: 'Carne', descricao: 'Picanha'},
      {nome: 'Hamburguer', descricao: 'Vegano'},
      {nome: 'Pimenta', descricao: 'Pimenta-malagueta'},
      {nome: 'Frango', descricao: 'Peito de Frango'},


      {nome: 'sorvete', descricao: 'Base cremosa de cacau com pedaços de chocolate meio amargo, coberto com calda de chocolate.'},
      {nome: 'Torta', descricao: 'Massa crocante de biscoito, recheio de maçãs carameladas com canela, passas branca e creme pâtissière, coberta com folhada folhada.'},
      {nome: 'mousse', descricao: 'Base de biscoito crocante, recheio de morangos frescos e açúcar, coberto com creme de leite batido.'},
      {nome: 'brownie', descricao: 'Harmonia perfeita entre o chocolate denso e o calor reconfortante, e a suavidade gelada do sorvete.'},
      {nome: 'Cheesecake', descricao: 'Base crocante, recheio cremoso de queijo, coberto com compota de framboesa. Equilíbrio perfeito entre doce e ácido.'},
    

      {nome: 'Clássico', descricao: 'Salsicha suculenta em pão tostado, com mostarda, ketchup, maionese e opcionalmente cebola e picles. Explosão de sabores.'},
      {nome: 'Vegano', descricao: 'Salsicha à base de vegetais em pão tostado, com coberturas veganas como mostarda, ketchup e maionese. Uma opção saborosa para veganos.'},
      {nome: 'Especial', descricao: 'Salsicha premium em pão artesanal com cebola caramelizada, pimentões, queijo Gruyère e mostarda dijon. Experiência única.'},
      {nome: 'Picante', descricao: 'Salsicha temperada com pimenta em um pão tostado, acompanhada por molho de pimenta, jalapeños e cebolas roxas. Uma experiência ousada para os amantes de comida picante.'},
      {nome: 'Duplo', descricao: 'Dois salsichões suculentos em um pão tostado, com coberturas clássicas como ketchup, mostarda, cebola e picles. Satisfazendo até os maiores apetites.'},


      {nome: 'Fritas', descricao: 'palitos dourados, crocantes por fora e macios por dentro, temperados com sal marinho. Perfeitas para mergulhar em ketchup, maionese ou barbecue.'},
      {nome: 'Onions', descricao: 'Anéis de cebola crocantes, empanados e temperados, servidos quentes com molhos como maionese ou barbecue, ótimos para compartilhar.'},
      {nome: 'Passarinho', descricao: 'pedaços empanados e fritos, suculentos por dentro, crocantes por fora, com molhos como maionese de alho ou picante. Ideal para qualquer ocasião.'},
      {nome: 'Mandioca', descricao: 'pedaços dourados e crocantes por fora, macios por dentro, temperados com sal marinho, servidos quentes com molhos como maionese verde ou molho de pimenta.'},
      {nome: 'Polenta', descricao: 'fatias de polenta douradas e crocantes por fora, macias por dentro, temperadas com especiarias e sal, servidas quentes com molhos variados.'},

    ])
  }
}