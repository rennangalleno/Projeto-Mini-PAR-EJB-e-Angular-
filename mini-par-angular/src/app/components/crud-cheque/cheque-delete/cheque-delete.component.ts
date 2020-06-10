import { Component, OnInit } from '@angular/core';
import { ChequeService } from 'src/app/services/cheque.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowMessageService } from 'src/app/services/show-message.service';
import { Cheque } from 'src/app/models/cheque';

@Component({
  selector: 'app-cheque-delete',
  templateUrl: './cheque-delete.component.html',
  styleUrls: ['./cheque-delete.component.css']
})
export class ChequeDeleteComponent implements OnInit {

  cheque:Cheque;

  constructor(
    private chequeService:ChequeService,
    private activeteRoute:ActivatedRoute,
    private showMessageService:ShowMessageService,
    private router:Router) { }

  ngOnInit(): void {
    const id = +this.activeteRoute.snapshot.paramMap.get('id');
    this.chequeService.readById(id).subscribe((cheque)=>{
      this.cheque = cheque;
    });
  }

  excluirCheque():void{
    this.chequeService.delete(this.cheque.id).subscribe(()=>{
      this.showMessageService.showMessage("Cheque excluído com sucesso");
      this.router.navigate(['/cheques']);
    });
  }

  cancelar():void{
    this.router.navigate(['/cheques']);
  }

}
