import { Component, OnInit } from '@angular/core';

import { Cliente } from './cliente';
import { ClientesService } from '../../clientes.service'

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css'],
})
export class ClientesFormComponent implements OnInit {
  //Para receber os dados do cliente para o template
  cliente: Cliente;
  success: boolean = true;
  errors?: String[];

  constructor( private service : ClientesService) {
    this.cliente = new Cliente();
    // this.cliente = service.getCliente();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.service.salvar(this.cliente).subscribe( response => {
      this.success = true;
    } , errorResponse ==> {
      this.errors = errorResponse.error.errors;
    }
    )
  }
}
