import { somaValor } from "../Interface/somaValor";

export class valorBox implements somaValor {
    private readonly total: somaValor[] = [];

    getValor(): number {
        return this.total.reduce((sum, val) => sum + val.getValor(), 0);
    }
  
    add(...val: somaValor[]): void {
      val.forEach((item) => this.total.push(item));
    }
}