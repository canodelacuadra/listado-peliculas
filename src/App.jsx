import './App.css';
import FormRegistro from './componentes/form-registro';
import FormLogin from './componentes/form-login';
import ListaPeliculas from './componentes/lista-peliculas/lista-peliculas';


const App = () => {


  return (
    <>
      {/*   <h3>Form Registro</h3>
      <FormRegistro />
      <h3>Form Login</h3> 
      <FormLogin />*/}
      <ListaPeliculas />
    </>
  );
};

export default App