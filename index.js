const meuCodigo = "HELLO WORLD";
const minhaFuncao = (codigo) => {
    for(let i = 0;i<codigo.length;i++){
        if(codigo.charAt(i) == codigo.charAt(i+1)){
            resultado = codigo.charAt(i) + codigo.charAt(i+1);
        }
        return resultado;
    }
}
console.log(minhaFuncao(meuCodigo));