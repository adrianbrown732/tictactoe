import NewButton from "./cell-button";

export default function HomePage() {
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <main className="board">
        <NewButton className="cell"></NewButton>
        <NewButton className="cell"></NewButton>
        <NewButton className="cell"></NewButton>
        <NewButton className="cell"></NewButton>
        <NewButton className="cell"></NewButton>
        <NewButton className="cell"></NewButton>
        <NewButton className="cell"></NewButton>
        <NewButton className="cell"></NewButton>
        <NewButton className="cell"></NewButton>
      </main>
    </>
  );
}
