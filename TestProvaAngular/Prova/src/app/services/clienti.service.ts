import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClientiService {
  clientiArray: Cliente[] = [
    {
      id: 1,
      nome: 'Ciccio',
      cognome: 'Impastato',
      eta: 67,
    },
    {
      id: 2,
      nome: 'Luca',
      cognome: 'Rossi',
      eta: 23,
    },
    {
      id: 3,
      nome: 'Anna',
      cognome: 'Bianchi',
      eta: 23,
    },
    {
      id: 4,
      nome: 'Lino',
      cognome: 'Banfi',
      eta: 89,
    },
  ];

  constructor() {}
}
