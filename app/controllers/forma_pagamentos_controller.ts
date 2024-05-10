// import type { HttpContext } from '@adonisjs/core/http'

import FormaPagamento from "#models/forma_pagamento";

export default class FormaPagamentosController {

    async index(){
        return await FormaPagamento.all()
    }

}