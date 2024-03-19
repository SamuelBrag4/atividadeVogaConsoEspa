let vogais = ['a', 'e', 'i', 'o', 'u'];

let consoantes = ['b', 'c', 'd', 'f', 'g',
                'h', 'j', 'k', 'l', 'm',
                'n', 'p', 'q', 'r', 's',
                't', 'v', 'w', 'x', 'y', 
                'z'];

let texto = "O professor thiago gosta de passar atividades complicadas, porém, eu dou meu máximo para fazer"

texto = texto.toLowerCase('');

let dividirTexto = texto.split('');

let vogaisTotais = [];

let consoantesTotais = [];

let espacosTotais = [];

for(let i = 0; i < dividirTexto.length; i++){
    if(vogais.includes(dividirTexto[i])){
        vogaisTotais.push(dividirTexto[i]);
    }
}

for()

console.log("Texto inserido " + texto);
console.log("Vogais encontradas: " + vogaisTotais);
console.log("Consoantes encontradas: " + consoantesTotais);
console.log("Total de vogais: "  );
console.log("Total de consoantes: "  );
console.log("Total de espaçõs: " + espacosTotais)