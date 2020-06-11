import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Bandeira } from 'src/app/models/bandeira';
import { Cartao } from 'src/app/models/cartao';
import { Cliente } from 'src/app/models/cliente';
import { CartaoService } from 'src/app/services/cartao.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ShowMessageService } from 'src/app/services/show-message.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './cartao-update.component.html',
  styleUrls: ['./cartao-update.component.css']
})
export class CartaoUpdateComponent implements OnInit {

  cartaoForm: FormGroup;
  clienteCombo: Cliente[];
  bandeiraCombo: Bandeira[];
  cartao: Cartao;

  constructor(
    private cartaoService: CartaoService,
    private clienteService: ClienteService,
    private showMessageService: ShowMessageService,
    private activeRoute: ActivatedRoute,
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

    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.cartaoService.readById(id).subscribe((cartao) => {
      this.cartao = cartao;
      this.updateForm();
    });
  }

  createForm(): void {
    this.cartaoForm = this.formBuilder.group({
      id:[null],
      bandeira: ["", Validators.required],
      cliente: ["", Validators.required],
      dataVencimento: [null, Validators.required],
      valor: [null, Validators.required]
    });
  }

  updateForm(): void {
    this.cartaoForm.setValue({
      id:this.cartao.id,
      bandeira: "",
      cliente: "",
      dataVencimento: this.cartao.dataVencimento,
      valor: this.cartao.valor
    })
  }

  atualizarCartao(): void {
    const cartao = this.cartaoForm.getRawValue() as Cartao;
    this.cartaoService.update(cartao).subscribe(() => {
      this.showMessageService.showMessage("Cartao atualizado com sucesso!");
      this.router.navigate(['/cartoes']);
    })
  }

  cancelar(): void {
    this.router.navigate(['/cartoes']);
  }

  verificaValidTouched(field) {
    return this.cartaoForm.get(field) && !this.cartaoForm.get(field).valid && this.cartaoForm.get(field).touched;
  }

  aplicaCssErro(field) {
    return {
      'has-error': this.verificaValidTouched(field),
      'has-feedback': this.verificaValidTouched(field)
    };
  }
}
