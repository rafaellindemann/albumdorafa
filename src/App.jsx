import { useState } from "react";
import "./App.css";

const figurinhas = [
  { numero: 1, quantidade: 1 },
  { numero: 2, quantidade: 2 },
  { numero: 3, quantidade: 5 },
  { numero: 4, quantidade: 0 },
  { numero: 5, quantidade: 0 },

  { numero: 6, quantidade: 0 },
  { numero: 7, quantidade: 0 },
  { numero: 8, quantidade: 1 },
  { numero: 9, quantidade: 0 },
  { numero: 10, quantidade: 1 },

  { numero: 11, quantidade: 1 },
  { numero: 12, quantidade: 5 },
  { numero: 13, quantidade: 0 },
  { numero: 14, quantidade: 0 },
  { numero: 15, quantidade: 3 },

  { numero: 16, quantidade: 0 },
  { numero: 17, quantidade: 1 },
  { numero: 18, quantidade: 1 },
  { numero: 19, quantidade: 1 },
  { numero: 20, quantidade: 1 },

  { numero: 21, quantidade: 1 },
  { numero: 22, quantidade: 0 },
  { numero: 23, quantidade: 1 },
  { numero: 24, quantidade: 0 },
  { numero: 25, quantidade: 1 }
];

function descobrirStatus(quantidade) {
  if (quantidade === 0) return "naoTenho";
  if (quantidade === 1) return "jaTenho";
  return "repetida";
}

function App() {
  const [filtro, setFiltro] = useState("todas");

const cards = figurinhas.map(figurinha => ({
  numero: figurinha.numero,
  quantidade: figurinha.quantidade,
  status: descobrirStatus(figurinha.quantidade)
}));

  const totalJaTenho = cards.filter(
    card => card.status === "jaTenho"
  ).length;

  const totalNaoTenho = cards.filter(
    card => card.status === "naoTenho"
  ).length;

  const totalRepetidas = cards.filter(
    card => card.status === "repetida"
  ).length;

  const cardsFiltrados = cards.filter(card => {
    if (filtro === "todas") {
      return true;
    }

    return card.status === filtro;
  });

  return (
    <main className="pagina">
      <header className="topo">
        {/* <p> • Rafa Lindemann • </p> */}
        <h1>Álbum da Firma • Rafa Lindemann • </h1>
      </header>

      <section className="filtros">
        <span
          className={`filtro ${filtro === "todas" ? "ativo" : ""}`}
          onClick={() => setFiltro("todas")}
        >
          Todas ({cards.length})
        </span>

        <span
          className={`filtro jaTenho ${
            filtro === "jaTenho" ? "ativo" : ""
          }`}
          onClick={() => setFiltro("jaTenho")}
        >
          Já tenho ({totalJaTenho})
        </span>

        <span
          className={`filtro naoTenho ${
            filtro === "naoTenho" ? "ativo" : ""
          }`}
          onClick={() => setFiltro("naoTenho")}
        >
          Não tenho ({totalNaoTenho})
        </span>

        <span
          className={`filtro repetida ${
            filtro === "repetida" ? "ativo" : ""
          }`}
          onClick={() => setFiltro("repetida")}
        >
          Repetida ({totalRepetidas})
        </span>
      </section>

      <section className="grade">
        {cardsFiltrados.map(card => (
          <article
            key={card.numero}
            className={`card ${card.status}`}
          >
            <span className={`status ${card.status}`}>
              {card.status === "jaTenho" && "Já tenho"}
              {card.status === "naoTenho" && "Não tenho"}
              {card.status === "repetida" && "Repetida"}
            </span>

            <strong>
              #{String(card.numero).padStart(2, "0")}
            </strong>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;