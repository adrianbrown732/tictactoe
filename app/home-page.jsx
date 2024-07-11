import Header from "./header";
import NewCell from "./cell-button";

export default function HomePage() {
  return (
    <>
      <Header></Header>
      <main className="board">
        <NewCell></NewCell>
        <NewCell></NewCell>
        <NewCell></NewCell>
        <NewCell></NewCell>
        <NewCell></NewCell>
        <NewCell></NewCell>
        <NewCell></NewCell>
        <NewCell></NewCell>
        <NewCell></NewCell>
      </main>
      <footer></footer>
    </>
  );
}
