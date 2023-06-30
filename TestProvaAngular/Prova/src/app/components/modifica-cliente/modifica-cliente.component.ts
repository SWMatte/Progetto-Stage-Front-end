import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-modifica-cliente',
  templateUrl: './modifica-cliente.component.html',
  styleUrls: ['./modifica-cliente.component.css']
})
export class ModificaClienteComponent implements OnInit {

  updateForm! : FormGroup;

  @Output()
  clienteUpdate : any = new EventEmitter<any>()

  @Input()
  listaClienti : Cliente[] = []

  constructor() {}

  ngOnInit(): void {

    this.updateForm = new FormGroup({
      nome : new FormControl(''),
      cognome : new FormControl(''),
      eta : new FormControl('')
    })
  }


  onSubmit(){
    this.clienteUpdate.emit({nome:this.updateForm.value.nome, cognome: this.updateForm.value.cognome, eta: this.updateForm.value.eta });
  }
}
