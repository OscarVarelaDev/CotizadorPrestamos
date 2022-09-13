import Header from "./componets/Header";
import { Fragment, useState } from "react";
import Formulario from "./componets/Formulario";
import Mensaje from "./componets/Mensaje";
import Resultado from "./componets/Resultado";

function App() {
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);

  let componente;
  if (total === 0) {
    componente = <Mensaje />
  } else {
    componente = <Resultado  
    total={total}
    plazo={plazo}
    cantidad={cantidad}/>
  }

  return (
    <Fragment>
      <Header
        titulo="Cotizador de prestamos"

      />
      <div className="container">
        <Formulario
          //Pasar las props desde el padre
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          total={total}
          guardarTotal={guardarTotal}
        />
        <div className="mensajes">
         {componente}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
