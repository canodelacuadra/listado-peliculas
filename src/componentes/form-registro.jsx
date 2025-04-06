import { useState } from "react";

const FormRegistro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function procesarRegistro(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/usuarios/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error en el registro");
      }

      alert("Registro exitoso");
      setFormData({ nombre: "", email: "", password: "" }); // Limpiar formulario
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="container mt-2">
      <h3>Formulario de Registro</h3>
      <form className="row row-cols-lg-auto g-3 align-items-center" onSubmit={procesarRegistro}>
        <div className="col-3">
          <label className="visually-hidden" htmlFor="nombre">
            nombre
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              placeholder="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-3">
          <label className="visually-hidden" htmlFor="email">
            Email
          </label>
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-3">
          <label className="visually-hidden" htmlFor="password">
            Password
          </label>
          <div className="input-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-3">
          <button type="submit" className="btn btn-primary">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormRegistro;