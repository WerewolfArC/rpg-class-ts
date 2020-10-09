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
var Elemento = /** @class */ (function (_super) {
    __extends(Elemento, _super);
    function Elemento() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Elemento;
}(Elemento_1.default.Elemento));
var Personagem = /** @class */ (function () {
    function Personagem(nome) {
        this.energia = 100;
        this.vida = 100;
        this.ataque = 100;
        this.defesa = 100;
        if (nome)
            this.nome = nome;
    }
    Personagem.prototype.eForte = function (atacante, defensor, ataqueObjeto, defesaObjeto) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
        if (ataqueObjeto && defesaObjeto) {
            if (((_a = ataqueObjeto === null || ataqueObjeto === void 0 ? void 0 : ataqueObjeto.elemento) === null || _a === void 0 ? void 0 : _a.nome) === ((_c = (_b = defesaObjeto === null || defesaObjeto === void 0 ? void 0 : defesaObjeto.elemento) === null || _b === void 0 ? void 0 : _b.fraco) === null || _c === void 0 ? void 0 : _c.nome)) {
                return [true, 1];
            }
            else if (((_d = ataqueObjeto === null || ataqueObjeto === void 0 ? void 0 : ataqueObjeto.elemento) === null || _d === void 0 ? void 0 : _d.nome) === ((_f = (_e = defesaObjeto === null || defesaObjeto === void 0 ? void 0 : defesaObjeto.elemento) === null || _e === void 0 ? void 0 : _e.forte) === null || _f === void 0 ? void 0 : _f.nome)) {
                return [false, 1];
            }
            else {
                return [undefined, 1];
            }
        }
        else if (ataqueObjeto) {
            if (((_g = ataqueObjeto === null || ataqueObjeto === void 0 ? void 0 : ataqueObjeto.elemento) === null || _g === void 0 ? void 0 : _g.nome) === ((_j = (_h = defensor.elemento) === null || _h === void 0 ? void 0 : _h.fraco) === null || _j === void 0 ? void 0 : _j.nome)) {
                return [true, 2];
            }
            else if (((_k = ataqueObjeto === null || ataqueObjeto === void 0 ? void 0 : ataqueObjeto.elemento) === null || _k === void 0 ? void 0 : _k.nome) === ((_m = (_l = defensor.elemento) === null || _l === void 0 ? void 0 : _l.forte) === null || _m === void 0 ? void 0 : _m.nome)) {
                return [false, 2];
            }
            else {
                return [undefined, 2];
            }
        }
        else if (defesaObjeto) {
            if (((_o = atacante.elemento) === null || _o === void 0 ? void 0 : _o.nome) === ((_q = (_p = defesaObjeto === null || defesaObjeto === void 0 ? void 0 : defesaObjeto.elemento) === null || _p === void 0 ? void 0 : _p.fraco) === null || _q === void 0 ? void 0 : _q.nome)) {
                return [true, 3];
            }
            else if (((_r = atacante.elemento) === null || _r === void 0 ? void 0 : _r.nome) === ((_t = (_s = defesaObjeto === null || defesaObjeto === void 0 ? void 0 : defesaObjeto.elemento) === null || _s === void 0 ? void 0 : _s.forte) === null || _t === void 0 ? void 0 : _t.nome)) {
                return [false, 3];
            }
            else {
                return [undefined, 3];
            }
        }
        else {
            if (((_u = atacante.elemento) === null || _u === void 0 ? void 0 : _u.nome) === ((_w = (_v = defensor.elemento) === null || _v === void 0 ? void 0 : _v.fraco) === null || _w === void 0 ? void 0 : _w.nome)) {
                return [true, 4];
            }
            else if (((_x = atacante.elemento) === null || _x === void 0 ? void 0 : _x.nome) === ((_z = (_y = defensor.elemento) === null || _y === void 0 ? void 0 : _y.forte) === null || _z === void 0 ? void 0 : _z.nome)) {
                return [false, 4];
            }
            else {
                return [undefined, 4];
            }
        }
    };
    Personagem.prototype.dano = function (atacante, defensor, ataqueObjeto, defesaObjeto) {
        var resp = this.eForte(atacante, defensor, ataqueObjeto, defesaObjeto);
        var caso = resp[1];
        switch (caso) {
            case undefined:
                break;
            case 1:
                if ((ataqueObjeto === null || ataqueObjeto === void 0 ? void 0 : ataqueObjeto.durabilidade) && (defesaObjeto === null || defesaObjeto === void 0 ? void 0 : defesaObjeto.durabilidade) && resp[0] === true) {
                    defesaObjeto.durabilidade += (defesaObjeto.defesa - ((ataqueObjeto === null || ataqueObjeto === void 0 ? void 0 : ataqueObjeto.forca) + atacante.ataque) * 1.5);
                    ataqueObjeto.durabilidade -= 1;
                }
                else if ((ataqueObjeto === null || ataqueObjeto === void 0 ? void 0 : ataqueObjeto.durabilidade) && (defesaObjeto === null || defesaObjeto === void 0 ? void 0 : defesaObjeto.durabilidade) && resp[0] === false) {
                    defesaObjeto.durabilidade += (defesaObjeto.defesa - ((ataqueObjeto === null || ataqueObjeto === void 0 ? void 0 : ataqueObjeto.forca) + atacante.ataque) * 0.5);
                    ataqueObjeto.durabilidade -= 2;
                }
                else if ((ataqueObjeto === null || ataqueObjeto === void 0 ? void 0 : ataqueObjeto.durabilidade) && (defesaObjeto === null || defesaObjeto === void 0 ? void 0 : defesaObjeto.durabilidade) && resp[0] === undefined) {
                    defesaObjeto.durabilidade += (defesaObjeto.defesa - ((ataqueObjeto === null || ataqueObjeto === void 0 ? void 0 : ataqueObjeto.forca) + atacante.ataque));
                    ataqueObjeto.durabilidade -= 1;
                }
                break;
            case 2:
                if ((ataqueObjeto === null || ataqueObjeto === void 0 ? void 0 : ataqueObjeto.durabilidade) && defensor.vida && resp[0] === true) {
                    defensor.vida += (defensor.defesa - ((ataqueObjeto === null || ataqueObjeto === void 0 ? void 0 : ataqueObjeto.forca) + atacante.ataque) * 1.5);
                    ataqueObjeto.durabilidade -= 1;
                }
                else if ((ataqueObjeto === null || ataqueObjeto === void 0 ? void 0 : ataqueObjeto.durabilidade) && defensor.vida && resp[0] === false) {
                    defensor.vida += (defensor.defesa - ((ataqueObjeto === null || ataqueObjeto === void 0 ? void 0 : ataqueObjeto.forca) + atacante.ataque) * 0.5);
                    ataqueObjeto.durabilidade -= 2;
                }
                else if ((ataqueObjeto === null || ataqueObjeto === void 0 ? void 0 : ataqueObjeto.durabilidade) && defensor.vida && resp[0] === undefined) {
                    defensor.vida += (defensor.defesa - ((ataqueObjeto === null || ataqueObjeto === void 0 ? void 0 : ataqueObjeto.forca) + atacante.ataque));
                    ataqueObjeto.durabilidade -= 1;
                }
                break;
            case 3:
                if (atacante.energia && (defesaObjeto === null || defesaObjeto === void 0 ? void 0 : defesaObjeto.durabilidade) && resp[0] === true) {
                    defesaObjeto.durabilidade += (defesaObjeto.defesa - (atacante.ataque) * 1.5);
                    atacante.energia -= 1;
                }
                else if (atacante.energia && (defesaObjeto === null || defesaObjeto === void 0 ? void 0 : defesaObjeto.durabilidade) && resp[0] === false) {
                    defesaObjeto.durabilidade += (defesaObjeto.defesa - (atacante.ataque) * 1.5);
                    atacante.energia -= 1;
                }
                else if (atacante.energia && (defesaObjeto === null || defesaObjeto === void 0 ? void 0 : defesaObjeto.durabilidade) && resp[0] === undefined) {
                    defesaObjeto.durabilidade += (defesaObjeto.defesa - (atacante.ataque) * 1.5);
                    atacante.energia -= 1;
                }
                break;
            case 4:
                if (atacante.energia && defensor.vida && resp[0] === true) {
                    defensor.vida += (defensor.defesa - (atacante.ataque) * 1.5);
                    atacante.energia -= 1;
                }
                else if (atacante.energia && defensor.vida && resp[0] === false) {
                    defensor.vida += (defensor.defesa - (atacante.ataque) * 1.5);
                    atacante.energia -= 1;
                }
                else if (atacante.energia && defensor.vida && resp[0] === undefined) {
                    defensor.vida += (defensor.defesa - (atacante.ataque) * 1.5);
                    atacante.energia -= 1;
                }
                break;
            default:
                break;
        }
    };
    Personagem.prototype.ataca = function (atacante, defensor, ataqueObjeto, defesaObjeto) {
        if (atacante.vida > 0) {
            this.dano(atacante, defensor, ataqueObjeto, defesaObjeto);
            return true;
        }
        else {
            return false;
        }
    };
    return Personagem;
}());
exports.default = Personagem;
