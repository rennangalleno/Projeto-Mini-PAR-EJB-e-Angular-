import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowMessageService } from 'src/app/services/show-message.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cliente:Cliente;
  clienteForm: FormGroup;

  constructor(
    private clienteService:ClienteService,
    private activateRoute:ActivatedRoute,
    private showMessageService:ShowMessageService,
    private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.createForm();
    
    const id = +this.activateRoute.snapshot.paramMap.get('id');
    this.clienteService.readById(id).subscribe((cliente)=>{
      this.cliente = cliente;
      this.updateForm();
      });
  }

  createForm():void{
    this.clienteForm = this.formBuilder.group({
      id:[null],
      cpf:[null, Validators.required],
      nome:[null, Validators.required],
      email:[null, Validators.required],
      dataNascimento:[null, Validators.required]
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

  atualizarCliente():void{
    const cliente = this.clienteForm.getRawValue() as Cliente;
    this.clienteService.update(cliente).subscribe(()=>{
      this.showMessageService.showMessage("Cliente atualizado com sucesso!");
      this.router.navigate(['/clientes']);
    })
  }

  cancelar():void{
    this.router.navigate(['/clientes']);
  }
  
  verificaValidTouched(field){  
    return this.clienteForm.get(field) && !this.clienteForm.get(field).valid && this.clienteForm.get(field).touched;  
  }

  aplicaCssErro(field){
    return{
      'has-error': this.verificaValidTouched(field),
      'has-feedback': this.verificaValidTouched(field)
    };
  }
}
