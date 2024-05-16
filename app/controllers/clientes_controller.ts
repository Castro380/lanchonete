import type { HttpContext } from '@adonisjs/core/http'

import Cliente from "../models/cliente.js"

export default class ClientesController {

    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Cliente.query().preload('comandas').paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Cliente.findOrFail(params.id)
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'cpf', 'telefone', 'email'])
        return await Cliente.create(dados)
    }

    async update({params, request}: HttpContext){

        const cliente = await Cliente.findOrFail(params.id)
        const dados = request.only(['nome', 'cpf', 'telefone', 'email'])

        cliente.merge(dados)
        return await cliente.save()
    }


    async destroy({params}: HttpContext){
       const cliente = await Cliente.findOrFail(params.id)

    
        await cliente.delete()
        return {msg: 'Registro deletado com sucesso', cliente}
    }

}