import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ModificaClienteComponent } from '../modifica-cliente/modifica-cliente.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-clienti-table',
  templateUrl: './clienti-table.component.html',
  styleUrls: ['./clienti-table.component.css']
})
export class ClientiTableComponent implements OnInit {

  @Input()
  listaTabellaClienti : Cliente [] = []

  @Output()
  deleteClient = new EventEmitter<any>();

  @Output()
  editClient = new EventEmitter<any>();

  @Output()
  onSort: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onSearch: EventEmitter<any> = new EventEmitter<any>();


  columns:any[]=[]

  showModificaCliente:boolean = false;

  clienteUpdated : any = {} as any;

  constructor(public dialog: MatDialog){}


  ngOnInit(): void {
    //Keys dei clienti da inserire nelle colonne
      const col = Object.keys(this.listaTabellaClienti[0]);
      this.columns = col.map(e=> ({name: e}));
  }

  onEditClient(param: any) {
    this.showModificaCliente = true;
    this.clienteUpdated = { id: param.id};
  }

  clienteUpdate(param : any){
    this.clienteUpdated = param
    console.log(this.clienteUpdated)
  }

  onDeleteClient(param : number){
    this.deleteClient.emit(param)
  }

  onSortColumn(column: any){
    if(column.sort === "ASC"){
      column.sort = "DESC";
    }else{
      column.sort = "ASC";
    }
    this.columns = this.columns.map(e => e.name === column.name ? { ...e, sort: column.sort } : e);
    this.onSort.emit(column);
  }

   search(pippo :any[], a:any) {
    const response = pippo.filter(e=> Object.entries(e).some(v=> v[1] == a.value));
     this.onSearch.emit(response)
   }





}
