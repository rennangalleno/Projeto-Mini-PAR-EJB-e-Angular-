import { Component, OnInit } from '@angular/core';
import { Boleto } from 'src/app/models/boleto';
import { BoletoService } from 'src/app/services/boleto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowMessageService } from 'src/app/services/show-message.service';

@Component({
  templateUrl: './boleto-delete.component.html',
  styleUrls: ['./boleto-delete.component.css']
})
export class BoletoDeleteComponent implements OnInit {

  boleto:Boleto;

  constructor(
    private boletoService:BoletoService,
    private activeteRoute:ActivatedRoute,
    private showMessageService:ShowMessageService,
    private router:Router) { }

  ngOnInit(): void {
    const id = +this.activeteRoute.snapshot.paramMap.get('id');
    this.boletoService.readById(id).subscribe((boleto)=>{
      this.boleto = boleto;
    });
  }

  excluirBoleto():void{
    this.boletoService.delete(this.boleto.id).subscribe(()=>{
      this.showMessageService.showMessage("Boleto excluído com sucesso");
      this.router.navigate(['/boletos']);
    });
  }

  cancelar():void{
    this.router.navigate(['/boletos']);
  }
}
