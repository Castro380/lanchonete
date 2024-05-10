/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import IngredientesController from '../app/controllers/ingredientes_controller.js'
import ProdutosController from '../app/controllers/produtos_controller.js'
import TiposController from '../app/controllers/tipos_controller.js'
import CargosController from '#controllers/cargos_controller'
import ClientesController from '#controllers/clientes_controller'
import ComandasController from '#controllers/comandas_controller'
import FormaPagamentosController from '#controllers/forma_pagamentos_controller'
import ProdutoComandasController from '#controllers/produto_comandas_controller'
import ProdutoIngredientesController from '#controllers/produto_ingredientes_controller'
import FuncionariosController from '#controllers/funcionarios_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/produtos', ProdutosController).apiOnly()
router.resource('/tipos', TiposController).apiOnly()
router.resource('/ingredientes', IngredientesController).apiOnly()
router.resource('/cargos', CargosController).apiOnly()
router.resource('/clientes', ClientesController).apiOnly()
router.resource('/comandas', ComandasController).apiOnly()
router.resource('/forma_pagamento', FormaPagamentosController).apiOnly()
router.resource('/funcionarios', FuncionariosController).apiOnly()
router.resource('/produto_comanda', ProdutoComandasController).apiOnly()
router.resource('/produto_ingredientes', ProdutoIngredientesController).apiOnly()

