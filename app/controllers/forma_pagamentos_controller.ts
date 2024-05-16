import type { HttpContext } from '@adonisjs/core/http'

import formaPagamento from "../models/forma_pagamento.js"

export default class FormaPagamentosController {

    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await formaPagamento.query().preload('comandas').paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await formaPagamento.findOrFail(params.id)
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'produtoId', 'comandaId', 'quantidade'])
        return await formaPagamento.create(dados)
    }

    async update({params, request}: HttpContext){

        const forma_pagamento = await formaPagamento.findOrFail(params.id)
        const dados = request.only(['nome', 'produtoId', 'comandaId', 'quantidade'])

        forma_pagamento.merge(dados)
        return await forma_pagamento.save()
    }


    async destroy({params}: HttpContext){
       const forma_pagamento = await formaPagamento.findOrFail(params.id)

    
        await forma_pagamento.delete()
        return {msg: 'Registro deletado com sucesso', forma_pagamento}
    }

}