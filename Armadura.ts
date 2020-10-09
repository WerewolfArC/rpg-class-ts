import Elementos from './Elemento';
class Elemento extends Elementos.Elemento {};
export default class Armadura {
    nome?: string;
    elemento?: Elemento;
    defesa: number = 100;
    durabilidade: number = 100;

    constructor(nome?: string) {
        if (nome) {
            this.nome = nome
        }
    }
}