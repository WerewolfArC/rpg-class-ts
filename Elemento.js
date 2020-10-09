"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Elemento = /** @class */ (function () {
    function Elemento(nome, forte, fraco) {
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
    return Elemento;
}());
var Fogo = new Elemento('Fogo');
var Vento = new Elemento('Vento');
var Terra = new Elemento('Terra');
var Agua = new Elemento('Agua');
var Raio = new Elemento('Raio');
//fortes
Fogo.forte = Terra;
Vento.forte = Raio;
Terra.forte = Agua;
Agua.forte = Fogo;
Raio.forte = Terra;
//Fracos
Fogo.fraco = Agua;
Vento.fraco = Fogo;
Terra.fraco = Raio;
Agua.fraco = Terra;
Raio.fraco = Vento;
exports.default = {
    Elemento: Elemento,
    Fogo: Fogo,
    Vento: Vento,
    Terra: Terra,
    Agua: Agua,
    Raio: Raio
};
