import { Component, OnInit } from '@angular/core';
import { PagadorService } from 'src/app/services/pagador.service';
import { Pagador } from 'src/app/models/pagador';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowMessageService } from 'src/app/services/show-message.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './pagador-delete.component.html',
  styleUrls: ['./pagador-delete.component.css']
})
export class PagadorDeleteComponent implements OnInit {

  pagador:Pagador;
  pagadorForm:FormGroup;
  
  constructor(
    private pagadorService:PagadorService,
    private formBuilder:FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private showMessageService:ShowMessageService) { }

    ngOnInit(): void {
      this.createForm();
  
      const id = +this.route.snapshot.paramMap.get('id');
      this.pagadorService.readById(id).subscribe((pagador)=>{
        this.pagador = pagador;
        this.updateForm();
      });
    }
  
    createForm():void{
      this.pagadorForm = this.formBuilder.group({
        id:[null],
        cpf:[null],
        nome:[null],
        email:[null],
        dataNascimento:[null]
      });
    }
  
    updateForm():void{
      this.pagadorForm.setValue({
        id:this.pagador.id,
        cpf:this.pagador.cpf,
        nome:this.pagador.nome,
        email:this.pagador.email,
        dataNascimento:this.pagador.dataNascimento
      });
    }

  excluirPagador():void {
    this.pagadorService.delete(this.pagador.id).subscribe(()=>{
      this.showMessageService.showMessage("Pagador excluído com sucesso!");
      this.router.navigate(['/pagadores']);
    });
  }

  cancelar():void{
    this.router.navigate(['/pagadores']);
  }
}