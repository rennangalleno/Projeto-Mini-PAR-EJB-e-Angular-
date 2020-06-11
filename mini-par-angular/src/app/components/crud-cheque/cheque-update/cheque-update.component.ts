import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Cheque } from 'src/app/models/cheque';
import { ChequeService } from 'src/app/services/cheque.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { PagadorService } from 'src/app/services/pagador.service';
import { ShowMessageService } from 'src/app/services/show-message.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { Pagador } from 'src/app/models/pagador';

@Component({
  templateUrl: './cheque-update.component.html',
  styleUrls: ['./cheque-update.component.css']
})
export class ChequeUpdateComponent implements OnInit {

  chequeForm:FormGroup;
  clienteCombo: Cliente[];
  pagadorCombo: Pagador[];
  cheque: Cheque;

  constructor(
    private chequeService: ChequeService,
    private clienteService: ClienteService,
    private pagadorService: PagadorService,
    private showMessageService: ShowMessageService,
    private activeRoute:ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    
    this.clienteService.read().subscribe((clientes) => {
      this.clienteCombo = clientes;
    });
    this.pagadorService.read().subscribe((pagadores) => {
      this.pagadorCombo = pagadores;
    });
    
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.chequeService.readById(id).subscribe((cheque)=>{
      this.cheque = cheque;
      console.log(cheque);
      this.updateForm();
    });
  }

  createForm():void{
    this.chequeForm = this.formBuilder.group({
      id:[null],
      pagador: ["", Validators.required],
      cliente: ["", Validators.required],
      dataVencimento: [null, Validators.required],
      valor: [null, Validators.required]
    });
  }

  updateForm():void{
    this.chequeForm.setValue({
      id:this.cheque.id,
      pagador: "",
      cliente: "",
      dataVencimento: this.cheque.dataVencimento,
      valor: this.cheque.valor
    });
  }

  atualizarCheque(): void {
    const cheque = this.chequeForm.getRawValue() as Cheque;
    console.log(cheque);
    this.chequeService.update(cheque).subscribe(()=>{
      this.showMessageService.showMessage("Cheque atualizado com sucesso!");
      this.router.navigate(['/cheques']);
    })
  }

  cancelar(): void {
    this.router.navigate(['/cheques']);
  }

  verificaValidTouched(field){  
    return this.chequeForm.get(field) && !this.chequeForm.get(field).valid && this.chequeForm.get(field).touched;  
  }

  aplicaCssErro(field){
    return{
      'has-error': this.verificaValidTouched(field),
      'has-feedback': this.verificaValidTouched(field)
    };
  }

}
