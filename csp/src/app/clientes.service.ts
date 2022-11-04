import { Cliente } from './clientes/clientes-form/cliente';
import { HttpClient } from '@angular/common/http'

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient ) {

   }

  getCliente() : Cliente {
    let cliente : Cliente = new Cliente();
    cliente.nome = 'Antony Diego';
    cliente.cpf = '00000000000';
    return cliente
  }
}
