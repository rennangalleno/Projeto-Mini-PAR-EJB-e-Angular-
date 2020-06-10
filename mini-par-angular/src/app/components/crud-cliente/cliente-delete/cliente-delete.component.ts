import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowMessageService } from 'src/app/services/show-message.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  cliente:Cliente;
  clienteForm:FormGroup;
  
  constructor(
    private clienteService:ClienteService,
    private activeRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private router:Router,
    private showMessageService:ShowMessageService
  ) { }

  ngOnInit(): void {
    this.createForm();
    
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.clienteService.readById(id).subscribe((cliente)=>{
      this.cliente = cliente;
      this.updateForm();
      });
  }

  createForm():void{
    this.clienteForm = this.formBuilder.group({
      id:[null],
      cpf:[null],
      nome:[null],
      email:[null],
      dataNascimento:[null]
    });
  }

  updateForm():void{
    this.clienteForm.setValue({
      id:this.cliente.id,
      cpf:this.cliente.cpf,
      nome:this.cliente.nome,
      email:this.cliente.email,
      dataNascimento:this.cliente.dataNascimento
    });
  }
  
  excluirCliente():void{
    this.clienteService.delete(this.cliente.id).subscribe(()=>{
      this.showMessageService.showMessage("Cliente excluído com sucesso!");
      this.router.navigate(['/clientes']);
    })
  }

  cancelar():void{
    this.router.navigate(['/clientes']);
  }
}
