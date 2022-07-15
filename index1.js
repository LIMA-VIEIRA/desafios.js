function calcularAreaQuadrado(lado){
    return lado * lado;
}
function calcularMaiorArea(lista){
    let maiorArea = 0;
    let nomeDoMaiorQuadrado;


lista.forEach(quadrado =>{
    const areaQuadrado = calculaareaQuadrado(quadrado.lado);
    if( areaQuadrado > maiorArea){
        maiorArea = areaQuadrado;
        nomeDoMaiorQuadrado = quadrado.nome;
    }
});
return nomeDoMaiorQuadrado;
}
console.log(calcularMaiorArea(quadrados));