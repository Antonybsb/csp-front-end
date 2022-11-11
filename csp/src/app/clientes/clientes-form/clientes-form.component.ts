import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Cliente } from './cliente';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css'],
})
export class ClientesFormComponent implements OnInit {
  //Para receber os dados do cliente para o template
  cliente: Cliente;
<<<<<<< HEAD
  success: boolean = false;
  errors: String[] = [];
=======
  success: boolean = true;
  errors?: String[];
>>>>>>> 64340c25d82577de372a80626f9b7fe3496162d2

  constructor(private service: ClientesService) {
    this.cliente = new Cliente();
    // this.cliente = service.getCliente();
  }

  ngOnInit(): void {}

  onSubmit() {
<<<<<<< HEAD
    this.service.salvar(this.cliente).subscribe(
      (response) => {
        this.success = true;
      },
      (HttpErrorResponse) => {
        this.errors = HttpErrorResponse.error.errors;
      }
    );
=======
    this.service.salvar(this.cliente).subscribe( response => {
      this.success = true;
    } , errorResponse ==> {
      this.errors = errorResponse.error.errors;
    }
    )
>>>>>>> 64340c25d82577de372a80626f9b7fe3496162d2
  }
}
