import { useState } from 'react';
export default function Usuario({ id, nombre, email, avatar }) {
    let [rol, setRol] = useState('desempleado')// los dos roles serán empleado y desempleado
    function cambiarRol() {
        setRol('empleado')
    }
    return (
        <>
            <div className="card p-2">
                <button onClick={cambiarRol} className='btn btn-success mb-2'> Cambiar rol</button>
                <ul className="list-group">
                    <li className="list-group-item">{id}</li>
                    <li className="list-group-item">{nombre}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{avatar}</li>
                    <li className="list-group-item">{rol}</li>
                </ul>
            </div>
        </>
    );

}