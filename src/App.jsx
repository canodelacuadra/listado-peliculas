import './App.css';
import ListaUsuarios from './componentes/lista-usuarios/listaUsuarios';
import coleccion from './data/cine.peliculas.json';
const App = () => {


  return (
    <>
      <div className='container'>
        <h1>Catálogo de Películas</h1>
        <table className='table'>
          {coleccion.map((pelicula) => (
            <tr key={pelicula._id.$oid}>
              <td>{pelicula.titulo}</td>
              <td>{pelicula.director}</td>

              <td>{pelicula.genero}</td>
              
              <td>{pelicula.año}</td>
            </tr>
          ))}
        </table>


        <h2> Lista de usuarios</h2>
        <ListaUsuarios></ListaUsuarios>

      </div>
    </>

  );

}

export default App
