import { Component, OnInit } from '@angular/core';
import { Cartao } from 'src/app/models/cartao';
import { ActivatedRoute, Router } from '@angular/router';
import { CartaoService } from 'src/app/services/cartao.service';
import { ShowMessageService } from 'src/app/services/show-message.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './cartao-delete.component.html',
  styleUrls: ['./cartao-delete.component.css']
})
export class CartaoDeleteComponent implements OnInit {

  cartao:Cartao;

  constructor(
    private cartaoService:CartaoService,
    private activeteRoute:ActivatedRoute,
    private showMessageService:ShowMessageService,
    private router:Router) { }

  ngOnInit(): void {
    const id = +this.activeteRoute.snapshot.paramMap.get('id');
    this.cartaoService.readById(id).subscribe((cartao)=>{
      this.cartao = cartao;
    });
  }

  excluirCartao():void{
    this.cartaoService.delete(this.cartao.id).subscribe(()=>{
      this.showMessageService.showMessage("Cartão excluído com sucesso");
      this.router.navigate(['/cartoes']);
    });
  }

  cancelar():void{
    this.router.navigate(['/cartoes']);
  }
}
