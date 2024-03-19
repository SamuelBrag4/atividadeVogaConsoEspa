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

let numeroConsoantes = [];

let numeroVogais = []; 

for(let i = 0; i < dividirTexto.length; i++){
    if(vogais.includes(dividirTexto[i])){
        vogaisTotais.push(dividirTexto[i]);
    }
}

for(let c = 0; c < dividirTexto.length; c++){
    if(consoantes.includes(dividirTexto[c])){
        consoantesTotais.push(dividirTexto[c]);
    }
}

for(let b = 0; b < dividirTexto.length; b++){
    if(espacosTotais.includes(dividirTexto[b])){
        espacosTotaisTotais.push(dividirTexto[b]);
    }
}

for(let d = 0; d < dividirTexto.length; d++){
    if(numeroConsoantes.includes(dividirTexto[d])){
        numeroConsoantes.push(dividirTexto[d]);
    }
}


console.log("Texto inserido " + texto);
console.log("Vogais encontradas: " + vogaisTotais);
console.log("Consoantes encontradas: " + consoantesTotais);
console.log("Total de vogais: "   );
console.log("Total de consoantes: " + numeroConsoantes.length);
console.log("Total de espacos: " + espacosTotais.length);