import React from "react";

export class Evento extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  aumentarContador = (quantidade) => {
    this.setState({ contador: this.state.contador + quantidade });
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.aumentarContador(2);
          }}
        >
          Aumentar contador
        </button>
        <p>{this.state.contador}</p>
      </div>
    );
  }
}
