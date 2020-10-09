import Elementos from './Elemento';
import Armadura from './Armadura'
import Espada from './Espada';
import Escudo from './Escudo'

class Elemento extends Elementos.Elemento {}

export default class Personagem {
    nome?: string;
    energia: number = 100;
    vida: number = 100;
    ataque: number = 100;
    defesa: number = 100;
    elemento?: Elemento;
    Armadura?: Armadura;
    Espada?: Espada;
    Escudo?: Escudo;
    constructor(nome?: string) {if (nome) this.nome = nome;}

    eForte(atacante: Personagem, defensor: Personagem, ataqueObjeto?: Espada, defesaObjeto?: Escudo|Armadura) {
        if (ataqueObjeto && defesaObjeto) {
            if (ataqueObjeto?.elemento?.nome === defesaObjeto?.elemento?.fraco?.nome) {
                return [true, 1];
            } else if (ataqueObjeto?.elemento?.nome === defesaObjeto?.elemento?.forte?.nome) {
                return [false, 1];
            } else {
                return [undefined, 1]
            }
        } else if (ataqueObjeto) {
            if (ataqueObjeto?.elemento?.nome === defensor.elemento?.fraco?.nome) {
                return [true, 2];
            } else if (ataqueObjeto?.elemento?.nome === defensor.elemento?.forte?.nome) {
                return [false, 2];
            } else {
                return [undefined, 2]
            }
        } else if (defesaObjeto) {
            if (atacante.elemento?.nome === defesaObjeto?.elemento?.fraco?.nome) {
                return [true, 3];
            } else if (atacante.elemento?.nome === defesaObjeto?.elemento?.forte?.nome) {
                return [false, 3];
            } else {
                return [undefined, 3]
            }
        } else {
            if (atacante.elemento?.nome === defensor.elemento?.fraco?.nome) {
                return [true, 4];
            } else if (atacante.elemento?.nome === defensor.elemento?.forte?.nome) {
                return [false, 4];
            } else {
                return [undefined, 4]
            }
        }
    }

    dano(atacante: Personagem, defensor: Personagem, ataqueObjeto?: Espada, defesaObjeto?: Escudo|Armadura) {
        let resp = this.eForte(atacante, defensor, ataqueObjeto, defesaObjeto);
        let caso = resp[1];
        switch (caso) {
            case undefined:
                break;
            case 1:
                if (ataqueObjeto?.durabilidade && defesaObjeto?.durabilidade && resp[0] === true) {
                    defesaObjeto.durabilidade += (defesaObjeto.defesa - (ataqueObjeto?.forca + atacante.ataque)*1.5)
                    ataqueObjeto.durabilidade -= 1
                } else if (ataqueObjeto?.durabilidade && defesaObjeto?.durabilidade && resp[0] === false) {
                    defesaObjeto.durabilidade += (defesaObjeto.defesa - (ataqueObjeto?.forca + atacante.ataque)*0.5)
                    ataqueObjeto.durabilidade -= 2
                } else if (ataqueObjeto?.durabilidade && defesaObjeto?.durabilidade && resp[0] === undefined) {
                    defesaObjeto.durabilidade += (defesaObjeto.defesa - (ataqueObjeto?.forca + atacante.ataque))
                    ataqueObjeto.durabilidade -= 1
                }
                break;
            case 2:
                if (ataqueObjeto?.durabilidade && defensor.vida && resp[0] === true) {
                    defensor.vida += (defensor.defesa - (ataqueObjeto?.forca + atacante.ataque)*1.5)
                    ataqueObjeto.durabilidade -= 1
                } else if (ataqueObjeto?.durabilidade && defensor.vida && resp[0] === false) {
                    defensor.vida += (defensor.defesa - (ataqueObjeto?.forca + atacante.ataque)*0.5)
                    ataqueObjeto.durabilidade -= 2
                } else if (ataqueObjeto?.durabilidade && defensor.vida && resp[0] === undefined) {
                    defensor.vida += (defensor.defesa - (ataqueObjeto?.forca + atacante.ataque))
                    ataqueObjeto.durabilidade -= 1
                }
                break;
            case 3:
                if (atacante.energia && defesaObjeto?.durabilidade && resp[0] === true) {
                    defesaObjeto.durabilidade += (defesaObjeto.defesa - (atacante.ataque)*1.5)
                    atacante.energia -= 1
                } else if (atacante.energia && defesaObjeto?.durabilidade && resp[0] === false) {
                    defesaObjeto.durabilidade += (defesaObjeto.defesa - (atacante.ataque)*1.5)
                    atacante.energia -= 1
                } else if (atacante.energia && defesaObjeto?.durabilidade && resp[0] === undefined) {
                    defesaObjeto.durabilidade += (defesaObjeto.defesa - (atacante.ataque)*1.5)
                    atacante.energia -= 1
                }
                break;
            case 4:
                if (atacante.energia && defensor.vida && resp[0] === true) {
                    defensor.vida += (defensor.defesa - (atacante.ataque)*1.5)
                    atacante.energia -= 1
                } else if (atacante.energia && defensor.vida && resp[0] === false) {
                    defensor.vida += (defensor.defesa - (atacante.ataque)*1.5)
                    atacante.energia -= 1
                } else if (atacante.energia && defensor.vida && resp[0] === undefined) {
                    defensor.vida += (defensor.defesa - (atacante.ataque)*1.5)
                    atacante.energia -= 1
                }
                break;
        
            default:
                break;
        }
    }

    ataca(atacante: Personagem, defensor: Personagem, ataqueObjeto?: Espada, defesaObjeto?: Escudo|Armadura){
        if (atacante.vida > 0) {
            this.dano(atacante, defensor, ataqueObjeto, defesaObjeto);
            return true
        } else {
            return false;
        }
    }
}