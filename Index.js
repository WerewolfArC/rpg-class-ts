"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Elemento_1 = __importDefault(require("./Elemento"));
var Arena_1 = __importDefault(require("./Arena"));
var Personagem_1 = __importDefault(require("./Personagem"));
var Espada_1 = __importDefault(require("./Espada"));
var Escudo_1 = __importDefault(require("./Escudo"));
var Armadura_1 = __importDefault(require("./Armadura"));
//Espadas
var Escalibur = new Espada_1.default('Escalibur');
Escalibur.elemento = Elemento_1.default.Vento;
Escalibur.forca = 100;
Escalibur.durabilidade = 30;
var Espada_comum = new Espada_1.default('Espada Comum');
Espada_comum.forca = 50;
Espada_comum.durabilidade = 100;
//Escudos
var Escudo_Romano = new Escudo_1.default('Escudo Romano');
Escudo_Romano.elemento = Elemento_1.default.Raio;
Escudo_Romano.defesa = 90;
Escudo_Romano.durabilidade = 10;
var Escudo_Egipcio = new Escudo_1.default('Escudo Egipcio');
Escudo_Egipcio.elemento = Elemento_1.default.Terra;
Escudo_Egipcio.defesa = 50;
Escudo_Egipcio.durabilidade = 80;
//Armaduras
var Armadura_de_Zeus = new Armadura_1.default('Armadura de Zeus');
Armadura_de_Zeus.elemento = Elemento_1.default.Raio;
Armadura_de_Zeus.defesa = 100;
Armadura_de_Zeus.durabilidade = 100;
//Jogadores
var ArthurCardozo = new Personagem_1.default('Arthur Cardozo');
ArthurCardozo.elemento = Elemento_1.default.Agua;
ArthurCardozo.ataque = 100;
ArthurCardozo.defesa = 100;
ArthurCardozo.vida = 100;
ArthurCardozo.Armadura = Armadura_de_Zeus;
ArthurCardozo.Escudo = Escudo_Romano;
ArthurCardozo.Espada = Escalibur;
var AngeloLuz = new Personagem_1.default('Angelo Luz');
AngeloLuz.elemento = Elemento_1.default.Fogo;
AngeloLuz.ataque = 100;
AngeloLuz.defesa = 100;
AngeloLuz.vida = 100;
AngeloLuz.Escudo = Escudo_Egipcio;
AngeloLuz.Espada = Espada_comum;
//Arena
var SENAC = new Arena_1.default('SENAC Pelotas');
SENAC.elemento = Elemento_1.default.Terra;
SENAC.locutor = new Personagem_1.default('Gladimir');
var jogadores = [ArthurCardozo, AngeloLuz];
var aleat = Number(Math.random().toFixed(0));
SENAC.jogador1 = jogadores.splice(aleat, 1)[0];
SENAC.jogador2 = jogadores[0];
console.log(SENAC.locutor.nome + ": Come\u00E7a a luta!");
var sobreviventes = [SENAC.jogador1, SENAC.jogador2];
while (sobreviventes.length === 2) {
    sobreviventes.forEach(function (j, index) {
        var _a, _b, _c;
        if (j.Armadura && ((_a = j.Armadura) === null || _a === void 0 ? void 0 : _a.durabilidade) <= 0) {
            j.Armadura = undefined;
        }
        if (j.Escudo && ((_b = j.Escudo) === null || _b === void 0 ? void 0 : _b.durabilidade) <= 0) {
            j.Escudo = undefined;
        }
        if (j.Espada && ((_c = j.Espada) === null || _c === void 0 ? void 0 : _c.durabilidade) <= 0) {
            j.Espada = undefined;
        }
        if (j.energia <= 0) {
            sobreviventes.splice(index, 1);
        }
        else if (j.vida <= 0) {
            sobreviventes.splice(index, 1);
        }
    });
    sobreviventes = SENAC.luta();
}
console.log(SENAC.locutor.nome + ": O jogador " + sobreviventes[0].nome + " ganhou!");
console.log(SENAC.locutor.nome + ": O outro jogador \u00E9 perdedor.");
