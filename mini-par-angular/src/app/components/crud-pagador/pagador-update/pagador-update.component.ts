import { Component, OnInit } from '@angular/core';
import { PagadorService } from 'src/app/services/pagador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagador } from 'src/app/models/pagador';
import { ShowMessageService } from 'src/app/services/show-message.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './pagador-update.component.html',
  styleUrls: ['./pagador-update.component.css']
})
export class PagadorUpdateComponent implements OnInit {

  pagador:Pagador;
  pagadorForm: FormGroup;

  constructor(
    private pagadorService:PagadorService,
    private activateRoute:ActivatedRoute,
    private showMessageService:ShowMessageService,
    private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.createForm();

    const id = +this.activateRoute.snapshot.paramMap.get('id');
    this.pagadorService.readById(id).subscribe((pagador)=>{
      this.pagador = pagador;
      this.updateForm();
    });
  }

  createForm():void{
    this.pagadorForm = this.formBuilder.group({
      id:[null],
      cpf:[null, Validators.required],
      nome:[null, Validators.required],
      email:[null, Validators.required],
      dataNascimento:[null, Validators.required]
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

  atualizarPagador():void{
    const pagador = this.pagadorForm.getRawValue() as Pagador;
    this.pagadorService.update(pagador).subscribe(()=>{
      this.showMessageService.showMessage("Pagador atualizado com sucesso!");
      this.router.navigate(['/pagadores']);
    })
  }

  cancelar():void{
    this.router.navigate(['/pagadores']);
  }
  
  verificaValidTouched(field){  
    return !this.pagadorForm.get(field).valid && this.pagadorForm.get(field).touched;  
  }

  aplicaCssErro(field){
    return{
      'has-error': this.verificaValidTouched(field),
      'has-feedback': this.verificaValidTouched(field)
    };
  }
}
