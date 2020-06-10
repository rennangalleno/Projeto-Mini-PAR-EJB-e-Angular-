import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { ShowMessageService } from 'src/app/services/show-message.service';

@Component({
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  clienteForm:FormGroup;

  constructor(
    private clienteService: ClienteService,
    private formBuilder:FormBuilder,
    private router: Router,
    private showMessageService:ShowMessageService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm():void{
    this.clienteForm = this.formBuilder.group({
      cpf:[null, Validators.required],
      nome:[null, Validators.required],
      email:[null, Validators.required],
      dataNascimento:[null, Validators.required]
    });
  }

  criarCliente(): void {
    const cliente = this.clienteForm.getRawValue() as Cliente;
    this.clienteService.create(cliente).subscribe(()=>{
      this.showMessageService.showMessage("Cliente cadastrado com sucesso!");
      this.router.navigate(['/clientes']);
    })
  }

  cancelar(): void {
    this.router.navigate(['/clientes']);
  }

  verificaValidTouched(field){  
    return !this.clienteForm.get(field).valid && this.clienteForm.get(field).touched;  
  }

  aplicaCssErro(field){
    return{
      'has-error': this.verificaValidTouched(field),
      'has-feedback': this.verificaValidTouched(field)
    };
  }
}
