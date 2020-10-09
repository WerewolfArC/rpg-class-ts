"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Elemento_1 = __importDefault(require("./Elemento"));
var Personagem_1 = __importDefault(require("./Personagem"));
var Elemento = /** @class */ (function (_super) {
    __extends(Elemento, _super);
    function Elemento() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Elemento;
}(Elemento_1.default.Elemento));
var Arena = /** @class */ (function () {
    function Arena(nome, locutorNome) {
        this.locutor = new Personagem_1.default();
        this.jogador1 = new Personagem_1.default();
        this.jogador2 = new Personagem_1.default();
        this.jogadores = [this.jogador1, this.jogador2];
        if (nome)
            this.nome = nome;
        if (locutorNome)
            this.locutor.nome = locutorNome;
    }
    Arena.prototype.luta = function () {
        var _this = this;
        var locutor = new Personagem_1.default();
        var vivos = [this.jogador1, this.jogador2];
        this.jogadores.forEach(function (j) {
            var _a, _b;
            if (((_a = j.elemento) === null || _a === void 0 ? void 0 : _a.nome) === ((_b = _this.elemento) === null || _b === void 0 ? void 0 : _b.nome)) {
                j.vida = j.vida * 2;
                j.ataque = j.ataque * 1.2;
            }
        });
        var move1 = locutor.ataca(this.jogador1, this.jogador2, this.jogador1.Espada, this.jogador2.Escudo ? this.jogador2.Escudo : this.jogador2.Armadura);
        var move2 = locutor.ataca(this.jogador2, this.jogador1, this.jogador2.Espada, this.jogador1.Escudo ? this.jogador1.Escudo : this.jogador1.Armadura);
        if (move1 && move2) {
        }
        else if (move1) {
            vivos.splice(1, 1);
        }
        else if (move2) {
            vivos.splice(0, 1);
        }
        return vivos;
    };
    return Arena;
}());
exports.default = Arena;
