import { MainClass } from "./Classes/mainClass";

const mainClass = new MainClass();

mainClass.planComercial(); // Adicionando 200 reais do plano comercial
mainClass.planExtra(); // Adicionando 50 reais de valor extra conforme definido no MainClass
console.log(mainClass.getRecibo());
console.log(mainClass.getValor());

mainClass.reset(); // Resetando valor do mainClass

mainClass.planResidencial(); // Adicionando 100 reais do plano Comercial
console.log(mainClass.getRecibo());
console.log(mainClass.getValor());

// Para executar = npx sucrase-node main.ts