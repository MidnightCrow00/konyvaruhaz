import { useContext } from 'react';
import './App.css';
import Kosar from './component/Kosar';
import Termekek from './component/Termekek';
import { KosarContext  } from './context/KosarContext';


function App() {
  const { kosar, termekek, kosarhozAd } = useContext(KosarContext);
  return (
    <div className="App">
      <header className="App-header">
       <h1>Webáruház</h1>
      </header>
      <article>
        <Termekek kosarhozAd={kosarhozAd}  termekek={termekek}/>
        <Kosar kosar={kosar} />
      </article>
      <footer><p>@Albert Orsolya</p></footer>
    </div>
  );
}

export default App;
