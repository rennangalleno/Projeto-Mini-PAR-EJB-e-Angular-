import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { Pagador } from 'src/app/models/pagador';
import { Boleto } from 'src/app/models/boleto';
import { BoletoService } from 'src/app/services/boleto.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { PagadorService } from 'src/app/services/pagador.service';
import { ShowMessageService } from 'src/app/services/show-message.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './boleto-update.component.html',
  styleUrls: ['./boleto-update.component.css']
})
export class BoletoUpdateComponent implements OnInit {

  boletoForm:FormGroup = new FormGroup({});
  clienteCombo: Cliente[];
  pagadorCombo: Pagador[];
  boleto: Boleto;

  constructor(
    private boletoService: BoletoService,
    private clienteService: ClienteService,
    private pagadorService: PagadorService,
    private showMessageService: ShowMessageService,
    private activeRoute:ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe((clientes) => {
      this.clienteCombo = clientes;
    });
    this.pagadorService.read().subscribe((pagadores) => {
      this.pagadorCombo = pagadores;
    });
    
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.boletoService.readById(id).subscribe((boleto)=>{
      this.boleto = boleto;

      this.boletoForm = this.formBuilder.group({
        pagador: ["", Validators.required],
        cliente: ["", Validators.required],
        dataVencimento: [this.boleto.dataVencimento, Validators.required],
        valor: [this.boleto.valor, Validators.required]
      });

    });

  }

  atualizarBoleto(): void {
    const boleto = this.boletoForm.getRawValue() as Boleto;
    this.boletoService.update(boleto).subscribe(()=>{
      this.showMessageService.showMessage("Boleto atualizado com sucesso!");
      this.router.navigate(['/boletos']);
    })
  }

  cancelar(): void {
    this.router.navigate(['/boletos']);
  }

  verificaValidTouched(field){  
    return this.boletoForm.get(field) && !this.boletoForm.get(field).valid && this.boletoForm.get(field).touched;  
  }

  aplicaCssErro(field){
    return{
      'has-error': this.verificaValidTouched(field),
      'has-feedback': this.verificaValidTouched(field)
    };
  }
}
