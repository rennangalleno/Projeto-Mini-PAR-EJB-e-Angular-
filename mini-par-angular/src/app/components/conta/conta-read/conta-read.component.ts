import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-conta-read',
  templateUrl: './conta-read.component.html',
  styleUrls: ['./conta-read.component.css']
})
export class ContaReadComponent implements OnInit {

  contaForm:FormGroup;
  cliente:Cliente;
  
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.contaForm = this.formBuilder.group({
      cpf: [null],
      conta: [null]
    });
  }
}
