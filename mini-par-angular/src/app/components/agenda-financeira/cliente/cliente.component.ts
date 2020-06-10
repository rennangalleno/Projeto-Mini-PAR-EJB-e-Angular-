import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgendaService } from 'src/app/services/agenda.service';
import { Cliente } from 'src/app/models/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  buscaClienteForm: FormGroup;
  cliente: Cliente;

  constructor(
    private formBuilder: FormBuilder,
    private agendaService: AgendaService,
    private router:Router) { }

  ngOnInit(): void {
    this.buscaClienteForm = this.formBuilder.group({
      cpf: [null, Validators.required],
      nome: [null],
      conta: [null]
    });
  }

  buscaCliente(cpf): void {
    this.agendaService.readCliente(cpf).subscribe((cliente) => {
      this.cliente = cliente;
      this.buscaClienteForm.setValue({
        cpf: this.cliente.cpf,
        nome: this.cliente.nome,
        conta: this.cliente.conta.numero
      });
    });
  }

  entrarAgenda():void{
    this.router.navigate(['/agenda/recebiveis', this.cliente.id]);
  }
}
