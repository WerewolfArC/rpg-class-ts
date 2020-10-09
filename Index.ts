import Elementos from './Elemento';
import Arena from './Arena';
import Personagem from './Personagem';
import Espada from './Espada';
import Escudo from './Escudo';
import Armadura from './Armadura';

//Espadas
var Escalibur = new Espada('Escalibur');
Escalibur.elemento = Elementos.Vento;
Escalibur.forca = 100;
Escalibur.durabilidade = 30;

var Espada_comum = new Espada('Espada Comum');
Espada_comum.forca = 50;
Espada_comum.durabilidade = 100;

//Escudos
var Escudo_Romano = new Escudo('Escudo Romano');
Escudo_Romano.elemento = Elementos.Raio;
Escudo_Romano.defesa = 90;
Escudo_Romano.durabilidade = 10;

var Escudo_Egipcio = new Escudo('Escudo Egipcio');
Escudo_Egipcio.elemento = Elementos.Terra;
Escudo_Egipcio.defesa = 50;
Escudo_Egipcio.durabilidade = 80;

//Armaduras
var Armadura_de_Zeus = new Armadura('Armadura de Zeus');
Armadura_de_Zeus.elemento = Elementos.Raio;
Armadura_de_Zeus.defesa = 100;
Armadura_de_Zeus.durabilidade = 100;

//Jogadores
var ArthurCardozo = new Personagem('Arthur Cardozo');
ArthurCardozo.elemento = Elementos.Agua;
ArthurCardozo.ataque = 100;
ArthurCardozo.defesa = 100;
ArthurCardozo.vida = 100;
ArthurCardozo.Armadura = Armadura_de_Zeus;
ArthurCardozo.Escudo = Escudo_Romano;
ArthurCardozo.Espada = Escalibur;

var AngeloLuz = new Personagem('Angelo Luz');
AngeloLuz.elemento = Elementos.Fogo;
AngeloLuz.ataque = 100;
AngeloLuz.defesa = 100;
AngeloLuz.vida = 100;
AngeloLuz.Escudo = Escudo_Egipcio;
AngeloLuz.Espada = Espada_comum;


//Arena
var SENAC = new Arena('SENAC Pelotas');
SENAC.elemento = Elementos.Terra;
SENAC.locutor = new Personagem('Gladimir');
let jogadores = [ArthurCardozo, AngeloLuz];
var aleat = Number(Math.random().toFixed(0))
SENAC.jogador1 = jogadores.splice(aleat, 1)[0];
SENAC.jogador2 = jogadores[0];
console.log(`${SENAC.locutor.nome}: Começa a luta!`);

let sobreviventes = [SENAC.jogador1, SENAC.jogador2]

while(sobreviventes.length === 2) {
    sobreviventes.forEach((j, index) => {
        if (j.Armadura && j.Armadura?.durabilidade <= 0) {
            j.Armadura = undefined;
        }
        if (j.Escudo && j.Escudo?.durabilidade <= 0) {
            j.Escudo = undefined;
        }
        if (j.Espada && j.Espada?.durabilidade <= 0) {
            j.Espada = undefined;
        }
        if (j.energia <= 0) {
            sobreviventes.splice(index, 1);
        } else if (j.vida <= 0) {
            sobreviventes.splice(index, 1);
        }
    });
    sobreviventes = SENAC.luta()
}
console.log(`${SENAC.locutor.nome}: O jogador ${sobreviventes[0].nome} ganhou!`);
console.log(`${SENAC.locutor.nome}: O outro jogador é perdedor.`);