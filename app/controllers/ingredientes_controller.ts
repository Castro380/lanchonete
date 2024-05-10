// import type { HttpContext } from '@adonisjs/core/http'

import Ingrediente from "#models/ingrediente";

export default class IngredientesController {

    async index(){
        return await Ingrediente.all()
    }

}