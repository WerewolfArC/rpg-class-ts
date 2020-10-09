class Elemento {
    nome?: string;
    forte?: Elemento;
    fraco?: Elemento;
    constructor(
    nome?: string,
    forte?: Elemento,
    fraco?: Elemento,
    ){
        if (nome) {
            this.nome = nome;
        }
        if (forte) {
            this.forte = forte;
        }
        if (fraco) {
            this.fraco = fraco;
        }
    }
}

let Fogo = new Elemento('Fogo');
let Vento = new Elemento('Vento');
let Terra = new Elemento('Terra');
let Agua = new Elemento('Agua');
let Raio = new Elemento('Raio');

//fortes

Fogo.forte = Terra
Vento.forte = Raio
Terra.forte = Agua
Agua.forte = Fogo
Raio.forte = Terra

//Fracos

Fogo.fraco = Agua
Vento.fraco = Fogo
Terra.fraco = Raio
Agua.fraco = Terra
Raio.fraco = Vento

export default {
    Elemento,
    Fogo,
    Vento,
    Terra,
    Agua,
    Raio
}