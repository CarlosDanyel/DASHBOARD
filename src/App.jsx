import style from "./App.module.less";
import { Header } from "./components/Header";
import { Navegacao } from "./components/Navegacao/Navegacao";

function App() {
  return (
    <>
      <div className={style.app}>
        <Navegacao />
        <Header />
        <main>
          <div className={style.grafic}></div>
          <div className={style.historic}></div>
          <div className={style.numeros}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={style.compradores}></div>
        </main>
      </div>
    </>
  );
}

export default App;
