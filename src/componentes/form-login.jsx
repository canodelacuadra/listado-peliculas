import { useState } from "react";

const FormLogin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/usuarios/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Credenciales incorrectas");
            }

            const data = await response.json();
            localStorage.setItem("token", data.token); // Guardar token en localStorage

            alert("Login exitoso");
            console.log("Token almacenado:", data.token);

        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="container mt-2">
            <h3>Iniciar Sesión</h3>
            <form className="row row-cols-lg-auto g-3 align-items-center" onSubmit={handleLogin}>
                <div className="col-4">
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
                <div className="col-4">
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
                <div className="col-4">
                    <button type="submit" className="btn btn-primary">
                        Iniciar Sesión
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormLogin;