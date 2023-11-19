import { somaValor } from "../Interface/somaValor";

export class planoExtra implements somaValor {
    constructor(private nome: string, private valor: number) {}
  
    getValor(): number {
      return this.valor;
    }
  }