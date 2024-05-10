// import type { HttpContext } from '@adonisjs/core/http'

import ProdutoIngrediente from "#models/produto_ingrediente";

export default class ProdutoIngredientesController {

    async index(){
        return await ProdutoIngrediente.all()
    }

}