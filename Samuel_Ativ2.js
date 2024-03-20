// Declaro um array com todas as vogais;
deixe  vogais  =  [ 'a' ,  'e' ,  'i' ,  'o' ,  'u' ] ;

// Declara um array com todas as consoantes;
deixe  consoantes  =  [ 'b' ,  'c' ,  'd' ,  'f' ,  'g' ,
                'h' ,  'j' ,  'k' ,  'l' ,  'm' ,
                'n' ,  'p' ,  'q' ,  'r' ,  's' ,
                't' ,  'v' ,  'w' ,  'x' ,  'y' , 
                'z' ] ;

// Declaro o texto que será analisado;
let  texto  =  "O professor Thiago passa atividades muito difíceis, porém eu dou o meu máximo para realizá-las" ;

// Utiliza o comando ".normalize()" que -
// utiliza o código Unicode (basicamente -
// é um esquema de planejamento que inclui quase todos -
//as línguas vivas do mundo) para converter os caracteres -
// com acentos. "NFD" serve para manter os caracteres separados;
deixe  texto2  =  texto . normalizar ( "NFD" ) ;

// Utiliza o comando ".toLowerCase()" -
// para fazer com que o programa entenda -
// todas as letras do texto como minúsculas;
texto2  =  texto2 . toLowerCase ( '' ) ;

// Utiliza o método ".split()" para dividir uma string;
deixe  dividirTexto  =  texto2 . dividir ( '' ) ;

// Aqui eu declaro todas as variáveis;
deixe  espaço  =  " " ;

deixe  vogaisTotais  =  [ ] ;

deixe  consoantesTotais  =  [ ] ;

deixe  espaçosTotais  =  [ ] ;

deixe  numeroConsoantes  =  [ 0 ] ;

deixe  numeroVogais  =  [ 0 ] ; 

// Aqui eu utilizo diversos laços de "for" para -
// considere o valor correspondente a todas as variáveis;
for ( let  i  =  0 ;  i  <  dividirTexto . length ;  i ++ ) {
    if ( vogais . inclui ( dividirTexto [ i ] ) ) {
        vogaisTotais . push ( dividir Texto [ i ] ) ;
        numeroVogais ++ ;
    }
}

for ( let  c  =  0 ;  c  <  dividirTexto.length ; c ++ ) {​​ 
    if ( consonâncias . inclui ( dividirTexto [ c ] ) ) {
        consoantesTotais . push ( dividir Texto [ c ] ) ;
        numeroConsoantes ++ ;
    }
}

for  ( let  b  =  0 ;  b  <  dividirTexto.length ; b ++ ) {​​  
  if  ( dividirTexto [ b ]  ==  espaço )  {
    espaçosTotais ++
  }
}

// Exibo as mensagens comentadas;
console . log ( "Texto inserido: "  +  texto ) ;
console . log ( "Vogais encontrados: "  +  vogaisTotais ) ;
console . log ( "Consoantes descobertas: "  +  consoantesTotais ) ;
console . log ( "Total de vogais: "  +  numeroVogais ) ;
console . log ( "Total de consoantes: "  +  numeroConsoantes ) ;
console . log ( "Total de espaços: "  +  espaçosTotais ) ;
