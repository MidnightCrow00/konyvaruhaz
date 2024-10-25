import { createContext, useState } from "react";
import termekLista from "../adatok";
export const KosarContext = createContext("");

export const KosarProvider = ({ children }) => {
  const [kosar, setKosar] = useState([]);
  const [termekek, setTermekek] = useState(termekLista);

  const kosarhozAd = (termek) => {
    const meglevoTermek = kosar.find((t) => t.id === termek.id);

    if (termek.db > 0) {
      if (meglevoTermek) {
        setKosar(
          kosar.map((t) => (t.id === termek.id ? { ...t, db: t.db + 1 } : t))
        );

        setTermekek(
          termekek.map((t) => (t.id === termek.id ? { ...t, db: t.db - 1 } : t))
        );
      } else {
        setKosar([...kosar, { ...termek, db: 1 }]);
        setTermekek(
          termekek.map((t) => (t.id === termek.id ? { ...t, db: t.db - 1 } : t))
        );
      }
    }
  };
  return (
    <KosarContext.Provider value={{ kosar, termekek, kosarhozAd }}>
      {children}
    </KosarContext.Provider>
  );
};
