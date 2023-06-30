import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientiService } from 'src/app/services/clienti.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css'],
})
export class ClientiComponent implements OnInit {
  listaClienti: Cliente[] = [];

  constructor(private clienti: ClientiService) {}

  ngOnInit(): void {
    this.listaClienti = [...this.clienti.clientiArray];
  }

  deleteClient(param: any) {
    this.listaClienti = this.listaClienti.filter((e: any) => e.id !== param);
  }
  editClient(param: any) {
    let elemento: Cliente = { id: param.id, nome: param.nome, cognome: param.cognome, eta: param.eta };

    this.listaClienti = this.listaClienti.map((cliente) => {
      if (cliente.id === elemento.id) {
        return {
          id: elemento.id,
          nome: elemento.nome,
          cognome: elemento.cognome,
          eta: elemento.eta
        };
      }
      return cliente;
    });
  }

  onSortColumn(param: any) {
    const columnName = param.name;
    const columnSort = param.sort;
    this.listaClienti.sort((a: any, b: any) => {
      if (columnSort === 'ASC') {
        if (a[columnName] > b[columnName]) {
          return 1;
        }
        if (a[columnName] < b[columnName]) {
          return -1;
        }
        return 0;
      } else {
        if (b[columnName] > a[columnName]) {
          return 1;
        }
        if (b[columnName] < a[columnName]) {
          return -1;
        }
        return 0;
      }
    });
  }

  onSearch(param: any) {
    if (param.length) {
      return (this.listaClienti = [...param]);
    }else{
      return this.listaClienti;
    }
  }

}
