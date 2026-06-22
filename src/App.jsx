import "./App.css";

const figurinhas = [
  1, 0, 3, 1, 2,
  0, 1, 4, 0, 1,
  2, 1, 0, 3, 1,
  0, 2, 1, 1, 5,
  0, 1, 3, 0, 1
];

function descobrirStatus(qtd) {
  if (qtd === 0) return "naoTenho";
  if (qtd === 1) return "jaTenho";
  return "repetida";
}

function App() {
  const cards = figurinhas.map((quantidade, index) => {
    const status = descobrirStatus(quantidade);

    return {
      numero: index + 1,
      status
    };
  });

  const totalJaTenho = cards.filter(card => card.status === "jaTenho").length;
  const totalNaoTenho = cards.filter(card => card.status === "naoTenho").length;
  const totalRepetidas = cards.filter(card => card.status === "repetida").length;

  return (
    <main className="pagina">
      <header className="topo">
        <p>Álbum da firma • Copa 2026</p>
        <h1>Minhas figurinhas</h1>
      </header>

      <section className="filtros">
        <span className="filtro jaTenho">Já tenho: {totalJaTenho}</span>
        <span className="filtro naoTenho">Não tenho: {totalNaoTenho}</span>
        <span className="filtro repetida">Repetida: {totalRepetidas}</span>
      </section>

      <section className="grade">
        {cards.map(card => (
          <article key={card.numero} className={`card ${card.status}`}>
            <span className="status">
              {card.status === "jaTenho" && "Já tenho"}
              {card.status === "naoTenho" && "Não tenho"}
              {card.status === "repetida" && "Repetida"}
            </span>

            <strong>#{String(card.numero).padStart(2, "0")}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;