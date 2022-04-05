import logo from "./logo.svg";
// Contenedor de rutas y ruta
import { Routes, Route } from "react-router-dom";
import FormControled from "./pages/formulario-controlado";
import Layout from "./pages/layout";

function App() {
  return (
    <>
      <Routes>
        {/* Dentro del contenedor de rutas se coloca cada ruta y el elemento que renderiza */}
        <Route path="/" element={<Layout page={<FormControled />} />} />
      </Routes>
    </>
  );
}

export default App;
