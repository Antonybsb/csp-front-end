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
<<<<<<< HEAD
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
=======

  //Para receber os dados do cliente para o template
  cliente!: Cliente;

  constructor( private service: ClientesService) {
>>>>>>> 3f71e4b5c503910a4e58efefbce69f199ed2a0b4
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  clicar(){
    console.log(this.cliente);
  }

  onSubmit() {
<<<<<<< HEAD
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
=======
    this.service
    .salvar(this.cliente)
    .subscribe( response => {
      console.log(response);
>>>>>>> 3f71e4b5c503910a4e58efefbce69f199ed2a0b4
    }

    )
>>>>>>> 64340c25d82577de372a80626f9b7fe3496162d2
  }
}
