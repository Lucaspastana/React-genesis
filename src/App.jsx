import React from 'react';

const name = {
  nome: "Mario",
  idade: 31,
  compras:{
    nome: "Celular", preço: 1500,
    nome: "TV", preço: 2500,
    nome: "GUITAR", preço: 1500,
  },
  ativa: true,
  
}
function App() {
  const dados = Mario;

  const total = name.compras
    .map((item) => Number(item.preço.replace('R$ ', '')))
    .reduce((a,b)=> a + b);


  return (
    <>
    <p>Nome: {name.nome}</p>
    <p>Idade: {name.idade}</p>
    <p>Situação: {' '}
      <span style={{color: dados.ativa ? 'green' : 'red'}}>
        {dados.ativa ? 'ativa' : 'inativa'}
      </span>
    </p>
    <p>total : R$ {total}</p>
    {total > 10000 && <p> você gastou</p>}
    </>
  ); 
};

export default App;
