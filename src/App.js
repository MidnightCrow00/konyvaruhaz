import { useState } from 'react';
import './App.css';
import Kosar from './component/Kosar';
import Termekek from './component/Termekek';
import termekLista from './adatok';


function App() {
  const[kosar, setKosar]=useState([]);
  const [termekek, setTermekek] = useState(termekLista); 

  const kosarhozAd = (termek) => {
    const meglevoTermek = kosar.find(t => t.id === termek.id);
  
  if (termek.db > 0) {
    if (meglevoTermek) {
      setKosar(kosar.map(t => 
        t.id === termek.id ? { ...t, db: t.db + 1 } : t
      ));
      
      setTermekek(termekek.map(t => 
        t.id === termek.id ? { ...t, db: t.db - 1 } : t
      ));
    } else {
      setKosar([...kosar, { ...termek, db: 1 }]);
      setTermekek(termekek.map(t => 
        t.id === termek.id ? { ...t, db: t.db - 1 } : t
      ));
    }
  }
  };


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
