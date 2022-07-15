const umArray = [ [10,20],[30,40],[50,60],[70,80],[90,100]];

const novoArray = umArray.map((item) => {
      let soma = 0;
      item.forEach((subItem) => {
        soma += subItem;
      });
      return soma;

});

console.log(novoArray);