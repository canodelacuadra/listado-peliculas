
import { useEffect, useState } from 'react';
export default function ListaPeliculas() {
  const [coleccion, setColeccion] = useState([]);
  useEffect(() => {
    fetch('https://api-rest-mongo-express-fb7i.onrender.com/peliculas')
      .then(res => res.json())
      .then(data => setColeccion(data))

      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className='container'>
        <h1 className='display-1 text-center'>Catálogo de Películas</h1>
        <div class="table-responsive">
          <table className='table table-striped'>
            <thead className='table-dark'>
              <tr>
                <th> Título</th>
                <th> Director</th>
                <th> Géneros</th>
                <th> Actores</th>
                <th> Año</th>
              </tr>
            </thead>
            <tbody>
              {coleccion.map((pelicula) => (
                <tr key={pelicula.id}>
                  <td>{pelicula.titulo}</td>
                  <td>{pelicula.director}</td>

                  <td>{pelicula.generos.join(' - ')}</td>
                  <td>{pelicula.actores.join(' - ')}</td>

                  <td>{pelicula.año}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>




      </div>
    </>

  );
}
