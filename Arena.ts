import Elementos from './Elemento';
import Personagem from "./Personagem";

class Elemento extends Elementos.Elemento {}

export default class Arena {
    nome?: string;
    elemento?: Elemento;
    locutor: Personagem = new Personagem();
    jogador1: Personagem = new Personagem();
    jogador2: Personagem = new Personagem();
    jogadores: Personagem[] = [this.jogador1, this.jogador2]
    constructor(nome?: string, locutorNome?: string) {
        if (nome) this.nome = nome;
        if (locutorNome) this.locutor.nome = locutorNome;
    }
    luta(){
        let locutor = new Personagem();
        let vivos = [this.jogador1, this.jogador2]
        this.jogadores.forEach(j => {
            if (j.elemento?.nome === this.elemento?.nome) {
                j.vida = j.vida*2
                j.ataque = j.ataque*1.2
            }
        })
        let move1 = locutor.ataca(this.jogador1, this.jogador2, this.jogador1.Espada, this.jogador2.Escudo ? this.jogador2.Escudo : this.jogador2.Armadura);
        let move2 = locutor.ataca(this.jogador2, this.jogador1, this.jogador2.Espada, this.jogador1.Escudo ? this.jogador1.Escudo : this.jogador1.Armadura);
        if ( move1 && move2 ) {
        } else if (move1) {
            vivos.splice(1, 1);
        } else if (move2) {
            vivos.splice(0, 1);
        }
        return vivos;
    }
}