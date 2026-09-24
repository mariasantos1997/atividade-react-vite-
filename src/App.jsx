import React from 'react';

// Componente Saudacao
function Saudacao(props) {
  return (
    <h2>Olá, {props.nome}!</h2>
  );
}

function App() {
  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container">
        <header className="row mb-4">
          <div className="col text-center">

            <h1 className="display-5 fw-bold text-primary">
              Projeto React + Bootstrap Grid
            </h1>

            <p className="lead text-secondary">
              Exemplo de layout responsivo utilizando o sistema
              de colunas do Bootstrap
            </p>

            <Saudacao nome="João" />

          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
