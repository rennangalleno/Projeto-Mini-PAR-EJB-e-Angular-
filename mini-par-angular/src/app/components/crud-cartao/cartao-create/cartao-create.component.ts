import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { CartaoService } from 'src/app/services/cartao.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ShowMessageService } from 'src/app/services/show-message.service';
import { Router } from '@angular/router';
import { Bandeira } from 'src/app/models/bandeira';
import { Cartao } from 'src/app/models/cartao';

@Component({
  templateUrl: './cartao-create.component.html',
  styleUrls: ['./cartao-create.component.css']
})
export class CartaoCreateComponent implements OnInit {

  cartaoForm: FormGroup;
  clienteCombo: Cliente[];
  bandeiraCombo: Bandeira[];

  constructor(
    private cartaoService: CartaoService,
    private clienteService: ClienteService,
    private showMessageService: ShowMessageService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();

    this.clienteService.read().subscribe((clientes) => {
      this.clienteCombo = clientes;
    });
    this.cartaoService.readBandeira().subscribe((bandeiras) => {
      this.bandeiraCombo = bandeiras;
    });
  }

  createForm():void{
    this.cartaoForm = this.formBuilder.group({ 
      bandeira: ["", Validators.required],
      cliente: ["", Validators.required],
      dataVencimento: [null, Validators.required],
      valor: [null, Validators.required]
    });
  }

  criarCartao(): void {
    const cartao = this.cartaoForm.getRawValue() as Cartao;
    this.cartaoService.create(cartao).subscribe(()=>{
      this.showMessageService.showMessage("Cartão cadastrado com sucesso!");
      this.router.navigate(['/cartoes']);
    })
  }

  cancelar(): void {
    this.router.navigate(['/cartoes']);
  }

  verificaValidTouched(field){  
    return !this.cartaoForm.get(field).valid && this.cartaoForm.get(field).touched;  
  }

  aplicaCssErro(field){
    return{
      'has-error': this.verificaValidTouched(field),
      'has-feedback': this.verificaValidTouched(field)
    };
  }

}
