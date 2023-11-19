import { somaValorBuilder } from "../Interface/somaValorBuilder";
import { planoComercial } from "./planoComercial";
import { planoResidencial } from "./planoResidencial";
import { valorBox } from "./valorBox";

export class MainClass implements somaValorBuilder {
    private valor: valorBox = new valorBox();

    reset(): this {
        this.valor = new valorBox();
        return this;
    }

    planComercial(): this {
        const somaComercial = new planoComercial('Comercial', 200);
        this.valor.add(somaComercial);
        return this;
    }

    planResidencial(): this {
        const somaResidencial = new planoResidencial('Residencial', 100);
        this.valor.add(somaResidencial);
        return this;
    }

    planExtra(): this {
        const somaExtra = new planoComercial('Valor Extra', 50);
        this.valor.add(somaExtra);
        return this;
    }

    getRecibo(): valorBox {
        return this.valor;
    }

    getValor(): number {
        return this.valor.getValor();
    }

}